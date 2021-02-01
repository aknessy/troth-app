import { ItemsCategories } from 'src/app/services/categories-data';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ShopService } from 'src/app/services/shop/shop.service';
import { ConfigService } from 'src/app/services/config/config.service';

@Component({
  selector: 'app-edit-shop',
  templateUrl: './edit-shop.component.html',
  styleUrls: ['./edit-shop.component.scss']
})
export class EditShopComponent implements OnInit {

  /**
   * Current Page Title
   * @var string 
   */
  pageTitle = '3roth App | Shop View/Editor';

  /**
   * if a request is being processed
   * @var boolean
   */
  moduleLoading : boolean;

  /**
   * Store the current shop Information for use
   * @var any
   */
  shopInfo : any;

  /**
   * Store the shop owner information
   * @var any
   */
  shopOwnerInfo : any;

  /**
   * Store the shop's owner's Id
   * @var number
   */
  shopOwnerId : number;

  /**
   * CUrrent shop Id as retrieved from the query param
   * @var number
   */
  shopId : number;

  /**
   * Current user's access token
   * @var string
   */
  accessToken : string;

  /**
   * store a count of this shop products
   * @var number
   */
  shopProductsCount : number;

  /**
   * Shop Information form
   * @var FormBuilder
   */
  shopInfoForm : any;

  /**
   * Items category
   * @var ItemsCategories
   */
  itemsCategories : any;
  
  /**
   * Origin (states)
   * @var any
   */
  origins : any;

  /**
   * Origin (cities)
   * @var any
   */
  originsCities : any;

  /**
   * Origin (cities)
   * @var any
   */
  cities : any;

  /**
   * Store DB Configuration
   * @var any
   */
  formFields : any = [];

  /**
   * Store merchant DB Config
   * @var any
   */
  dbConfig : any;


  /** */
  constructor(
    private title : Title,
    private fb : FormBuilder,
    private authService : AuthService,
    private shopService : ShopService,
    private configService : ConfigService,
    private route : ActivatedRoute
  ) {
    this.title.setTitle(this.pageTitle);
    this.accessToken = this.authService.accessToken();
    this.moduleLoading = true;
  }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe((params) => {
        this.shopId = +params.get('shopId');
      })

      this.configService.getConfig('merchant', this.accessToken)
      .subscribe((response) => {
        if(response)
          this.dbConfig = JSON.parse(response)
      })
   
      this.shopService.getSingle(this.shopId, this.accessToken)
      .subscribe((result) => {
        if(result){
          this.shopInfo = JSON.parse(result)
          let shopOwner = this.shopInfo.user_id
          let shopCategories = this.shopInfo.category

          this.shopInfoForm = this.fb.group({
            name : new FormControl(this.shopInfo.name, Validators.required),
            address : new FormControl(this.shopInfo.address, Validators.required),
            state : new FormControl(this.shopInfo.state, Validators.required),
            city : new FormControl(this.shopInfo.city),
            description : new FormControl(this.shopInfo.description),
            longitude : new FormControl(this.shopInfo.longitude),
            latitude : new FormControl(this.shopInfo.latitude, Validators.required),
            options : new FormArray([this.createFormControls()]),
            tags : new FormArray(
              [
                this.fb.group({
                  name : '',
                  value : ''
                })
              ]
            ),
            readTerms : new FormControl(this.shopInfo.readTerms),
            publish : new FormControl(this.shopInfo.publish)
          });

          this.shopService.getShopOwner(shopOwner, this.accessToken)
            .subscribe((ownerInfo) => {
              if(ownerInfo)
                this.shopOwnerInfo = JSON.parse(ownerInfo)
            });

          this.shopService.getShopProducts(this.shopId, this.accessToken)
            .subscribe((result) => {
              if (result) {
                let parseResult = JSON.parse(result);
                this.shopProductsCount = +Object.keys(parseResult).length
              }else
                this.shopProductsCount = 0;             
            })

            
          this.moduleLoading = false
        }
      }
    );

    this.shopService.getStatesOrigin('NG', this.accessToken)
    .subscribe((result) => {
      if (result) {
        let obj = JSON.parse(result);
        let objLen = Object.keys(obj).length
        this.origins = obj;
        this.originsCities = [];

        for(let i = 0; i < objLen; i++){
          this.originsCities[obj[i].code] = obj[i].cities
        }

        this.cities = this.originsCities[this.shopInfo.state]
      }
    })

    this.moduleLoading = false;
  }

  createFormControls()
  {
    const fields : any = {}
    
    this.configService.getConfig('merchant', this.accessToken)
      .subscribe((response) => {
		  if(response){
				let result = JSON.parse(response);
				let configGroup = JSON.parse(result.group)
				let objLen = Object.keys(configGroup).length;
				
				if(this.shopInfo.options){
					for(let i = 0; i < objLen; i++)
					{
						if(configGroup[i].config == this.shopInfo.options[i].config)
						{
							this.formFields.push(this.shopInfo.options[i].config)
							fields[this.shopInfo.options[i].config] = new FormControl(this.shopInfo.options[i].value)
						}else{
							this.formFields.push(configGroup[i].config);
							fields[configGroup[i].config] = new FormControl(configGroup[i].value);
						}
					}
				}else{
					for(let i = 0; i < objLen; i++)
					{
						this.formFields.push(configGroup[i].config)
						fields[configGroup[i].config] = new FormControl(configGroup[i].value)
					}
				}
			}
		  }
	)

    return new FormGroup(fields);
  }

  optionsGroup() {
	  return <FormArray>this.shopInfoForm.get('options')
  }

  updateShopInfo(){
    console.log(this.shopInfoForm.value)
  }

  getCities($event){
    this.moduleLoading = true;
    let selectedState = $event.target.value;

    setTimeout(() => {
      if(selectedState != '')
        this.cities = this.originsCities[selectedState];

        this.moduleLoading = false;
    }, 2000);
  }

}
