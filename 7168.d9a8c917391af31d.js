"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7168],{7168:(he,f,s)=>{s.r(f),s.d(f,{LaboratoryPageModule:()=>ie});var r=s(7331),m=s(6895),p=s(4719),v=s(581),h=s(6069),g=s(5861),d=s(6443),C=s(4904),e=s(6738),P=s(2680),b=s(1188),M=s(849),E=s(2013),Z=s(1557),L=s(5930),y=s(7638),A=s(2365),T=s(7802);let x=(()=>{class i extends A.b{constructor(){super(...arguments),this.serviceUrl=T.Y.URL_ORDER}getOrders(t){return this.post(this.serviceUrl+"/GetOrders",t)}createOrder(t){return this.post(T.Y.LIST_ORDER,t)}}return i.\u0275fac=function(){let l;return function(o){return(l||(l=e.n5z(i)))(o||i)}}(),i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var F=s(888);let S=(()=>{class i{constructor(){}transform(t){return this.isEmpty(t.receiveTime)?"Ch\u01b0a nh\u1eadn y\xeau c\u1ea7u":(this.isEmpty(t.arriveTime)||this.isEmpty(t.completeTime)||this.isEmpty(t.arriveLaboTime),"\u0110\xe3 nh\u1eadn y\xeau c\u1ea7u v\xe0 \u0111ang x\u1eed l\xfd")}isEmpty(t){return!!(null==t||"string"==typeof t&&""===t.trim()||Array.isArray(t)&&0===t.length||"object"==typeof t&&0===Object.keys(t).length)}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275pipe=e.Yjl({name:"statusRequestPipe",type:i,pure:!0}),i})();const I=["popoverFormFilter"],O=["orderStatusSelect"];function D(i,l){if(1&i&&(e.TgZ(0,"ion-select-option",35),e._uU(1),e.qZA()),2&i){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.name)}}function q(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"ion-content",0)(1,"ion-label",18),e._uU(2,"L\u1ecdc d\u1eef li\u1ec7u theo ..."),e.qZA(),e.TgZ(3,"ion-list")(4,"ion-item",18)(5,"ion-label",19),e._UZ(6,"ion-icon",20),e._uU(7," T\xean b\u1ec7nh nh\xe2n "),e.qZA(),e.TgZ(8,"ion-input",21),e.NdJ("ngModelChange",function(n){e.CHM(t);const a=e.oxw();return e.KtG(a.formFilterTestSheet.namePatient=n)}),e.qZA()(),e.TgZ(9,"ion-item",18)(10,"ion-label",19),e._UZ(11,"ion-icon",22),e._uU(12," S\u1ed1 \u0111i\u1ec7n tho\u1ea1i "),e.qZA(),e.TgZ(13,"ion-input",23),e.NdJ("ngModelChange",function(n){e.CHM(t);const a=e.oxw();return e.KtG(a.formFilterTestSheet.phoneNoPatient=n)}),e.qZA()(),e.TgZ(14,"ion-item",18)(15,"ion-label",19),e._UZ(16,"ion-icon",24),e._uU(17," Tr\u1ea1ng th\xe1i \u0110\u01a1n h\xe0ng "),e.qZA(),e.TgZ(18,"ion-select",25,26),e.NdJ("ionChange",function(n){e.CHM(t);const a=e.oxw();return e.KtG(a.handleChangeSelectOrderStatus(n))}),e.YNc(20,D,2,2,"ion-select-option",27),e.qZA()()(),e.TgZ(21,"ion-buttons",28)(22,"ion-button",29),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.cancelFormFilter())}),e._UZ(23,"ion-icon",30),e.qZA(),e.TgZ(24,"ion-button",31),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.restartFormFilter())}),e._UZ(25,"ion-icon",32),e.qZA(),e.TgZ(26,"ion-button",33),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.onSearchByFormFilter())}),e._UZ(27,"ion-icon",34),e.qZA()()()}if(2&i){const t=e.oxw();e.xp6(8),e.Q6J("ngModel",t.formFilterTestSheet.namePatient),e.xp6(5),e.Q6J("ngModel",t.formFilterTestSheet.phoneNoPatient),e.xp6(5),e.Q6J("interfaceOptions",t.customPopoverOptions),e.xp6(2),e.Q6J("ngForOf",t.initDatas.orderStatus)}}function w(i,l){if(1&i&&(e.TgZ(0,"ion-select-option",36),e._uU(1),e.qZA()),2&i){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.name," ")}}function N(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"ion-datetime",39,40),e.NdJ("ngModelChange",function(n){e.CHM(t);const a=e.oxw(2);return e.KtG(a.filterInterval.pastTime=n)})("ionChange",function(n){e.CHM(t);const a=e.oxw(2);return e.KtG(a.handleChangeFilterIntervalCustomByUser(n))}),e.TgZ(2,"span",41),e._uU(3,"Ch\u1ecdn th\u1eddi gian b\u1eaft \u0111\u1ea7u"),e.qZA()()}if(2&i){const t=e.oxw(2);e.Q6J("ngModel",t.filterInterval.pastTime)("showDefaultTitle",!0)("showDefaultButtons",!0)("showClearButton",!0)}}function U(i,l){1&i&&(e.TgZ(0,"ion-item")(1,"span",18),e._uU(2,"T\u1eeb ng\xe0y: "),e.qZA(),e._UZ(3,"ion-datetime-button",37),e.TgZ(4,"ion-modal",38),e.YNc(5,N,4,4,"ng-template"),e.qZA()()),2&i&&(e.xp6(4),e.Q6J("keepContentsMounted",!0))}function J(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"ion-datetime",43,44),e.NdJ("ngModelChange",function(n){e.CHM(t);const a=e.oxw(2);return e.KtG(a.filterInterval.presentTime=n)})("ionChange",function(n){e.CHM(t);const a=e.oxw(2);return e.KtG(a.handleChangeFilterIntervalCustomByUser(n))}),e.TgZ(2,"span",41),e._uU(3,"Ch\u1ecdn th\u1eddi gian b\u1eaft \u0111\u1ea7u"),e.qZA()()}if(2&i){const t=e.oxw(2);e.Q6J("ngModel",t.filterInterval.presentTime)("showDefaultTitle",!0)("showDefaultButtons",!0)("showClearButton",!0)("min",t.filterInterval.pastTime)}}function R(i,l){1&i&&(e.TgZ(0,"ion-item")(1,"span",18),e._uU(2,"\u0110\u1ebfn ng\xe0y: "),e.qZA(),e._UZ(3,"ion-datetime-button",42),e.TgZ(4,"ion-modal",38),e.YNc(5,J,4,5,"ng-template"),e.qZA()()),2&i&&(e.xp6(4),e.Q6J("keepContentsMounted",!0))}function H(i,l){if(1&i&&(e.TgZ(0,"h3",48),e._uU(1),e.qZA()),2&i){const t=e.oxw().$implicit;e.xp6(1),e.AsE(" ",null==t.partner?null:t.partner.code,"-",null==t.partner?null:t.partner.name,"")}}function B(i,l){if(1&i&&(e.TgZ(0,"div",49)(1,"div"),e._UZ(2,"ion-icon",22),e.qZA(),e.TgZ(3,"h3",50),e._uU(4),e.qZA()()),2&i){const t=e.oxw().$implicit;e.xp6(4),e.Oqu(t.phone)}}function k(i,l){if(1&i&&(e.TgZ(0,"div",49)(1,"div"),e._UZ(2,"ion-icon",51),e.qZA(),e.TgZ(3,"h3",52),e._uU(4),e.qZA()()),2&i){const t=e.oxw().$implicit;e.xp6(4),e.Oqu(t.address)}}function Y(i,l){if(1&i&&(e.TgZ(0,"div",49)(1,"div"),e._UZ(2,"ion-icon",53),e.qZA(),e.TgZ(3,"h3",50),e._uU(4),e.qZA()()),2&i){const t=e.oxw().$implicit;e.xp6(4),e.Oqu(t.comment)}}function G(i,l){if(1&i&&(e.TgZ(0,"ion-item")(1,"ion-label"),e.YNc(2,H,2,2,"h3",45),e.YNc(3,B,5,1,"div",46),e.YNc(4,k,5,1,"div",46),e.YNc(5,Y,5,1,"div",46),e.TgZ(6,"div",47)(7,"h3"),e._uU(8),e.ALo(9,"statusRequestPipe"),e.qZA()()()()),2&i){const t=l.$implicit;e.xp6(2),e.Q6J("ngIf",null==t||null==t.partner?null:t.partner.code),e.xp6(1),e.Q6J("ngIf",null==t?null:t.phone),e.xp6(1),e.Q6J("ngIf",null==t?null:t.address),e.xp6(1),e.Q6J("ngIf",null==t?null:t.comment),e.xp6(3),e.Oqu(e.lcZ(9,5,t))}}function Q(i,l){if(1&i&&(e.TgZ(0,"ion-select-option",36),e._uU(1),e.qZA()),2&i){const t=l.$implicit;e.Q6J("value",t.requestTypeId),e.xp6(1),e.Oqu(t.requestTypeName)}}function K(i,l){1&i&&(e.TgZ(0,"span",68),e._uU(1,"*Lo\u1ea1i y\xeau c\u1ea7u kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng!"),e.qZA())}function V(i,l){1&i&&(e.TgZ(0,"span",68),e._uU(1,"*T\xean b\u1ec7nh nh\xe2n kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng!"),e.qZA())}function z(i,l){1&i&&(e.TgZ(0,"span",68),e._uU(1,"*S\u1ed1 \u0111i\u1ec7n tho\u1ea1i kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng!"),e.qZA())}function $(i,l){1&i&&(e.TgZ(0,"span",68),e._uU(1,"*\u0110\u1ecba ch\u1ec9 kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng!"),e.qZA())}function j(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"ion-datetime",71),e.NdJ("ngModelChange",function(n){e.CHM(t);const a=e.oxw(3);return e.KtG(a.itemPatientFormModalLab.timeSample=n)})("ionChange",function(n){e.CHM(t);const a=e.oxw(3);return e.KtG(a.handleChangeTimeSample(n))}),e.TgZ(1,"span",41),e._uU(2,"TG L\u1ea5y m\u1ea5u/Thu m\u1eabu"),e.qZA()()}if(2&i){const t=e.oxw(3);e.Q6J("ngModel",t.itemPatientFormModalLab.timeSample)("showDefaultTitle",!0)("showDefaultButtons",!0)("showClearButton",!0)}}function W(i,l){1&i&&(e.TgZ(0,"ion-item")(1,"div",69)(2,"span"),e._uU(3,"TG L\u1ea5y m\u1ea5u/Thu m\u1eabu: "),e.TgZ(4,"span",58),e._uU(5,"*"),e.qZA()(),e._UZ(6,"ion-datetime-button",70),e.qZA(),e.TgZ(7,"ion-modal",38),e.YNc(8,j,3,4,"ng-template"),e.qZA()()),2&i&&(e.xp6(7),e.Q6J("keepContentsMounted",!0))}function X(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",54)(3,"ion-button",15),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.setOpenModalAddPatient(!1))}),e._uU(4,"Hu\u1ef7"),e.qZA()(),e.TgZ(5,"ion-title"),e._uU(6),e.qZA(),e.TgZ(7,"ion-buttons",55)(8,"ion-button",15),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.saveModalAddPatient())}),e._uU(9,"L\u01b0u"),e.qZA()()()(),e.TgZ(10,"ion-content",0),e._UZ(11,"label",56),e.TgZ(12,"div")(13,"ion-col")(14,"ion-item")(15,"ion-label",57),e._UZ(16,"ion-icon",20),e._uU(17," Lo\u1ea1i Y\xeau c\u1ea7u "),e.TgZ(18,"span",58),e._uU(19,"*"),e.qZA()(),e.TgZ(20,"ion-select",59),e.NdJ("ionChange",function(n){e.CHM(t);const a=e.oxw();return e.KtG(a.handleChangeRequestType(n))})("ngModelChange",function(n){e.CHM(t);const a=e.oxw();return e.KtG(a.itemPatientFormModalLab.valueRequestType=n)}),e.YNc(21,Q,2,2,"ion-select-option",10),e.qZA()(),e.YNc(22,K,2,0,"span",60),e.qZA(),e.TgZ(23,"ion-col")(24,"ion-item")(25,"ion-label",19),e._UZ(26,"ion-icon",20),e._uU(27," T\xean b\u1ec7nh nh\xe2n "),e.TgZ(28,"span",58),e._uU(29,"*"),e.qZA()(),e.TgZ(30,"ion-input",61),e.NdJ("ngModelChange",function(n){e.CHM(t);const a=e.oxw();return e.KtG(a.itemPatientFormModalLab.name=n)})("keyup",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.onKeyUpInputNamePatient())}),e.qZA()(),e.YNc(31,V,2,0,"span",60),e.qZA(),e.TgZ(32,"ion-col")(33,"ion-item")(34,"ion-label",19),e._UZ(35,"ion-icon",22),e._uU(36," S\u1ed1 \u0111i\u1ec7n tho\u1ea1i "),e.TgZ(37,"span",58),e._uU(38,"*"),e.qZA()(),e.TgZ(39,"ion-input",62),e.NdJ("ngModelChange",function(n){e.CHM(t);const a=e.oxw();return e.KtG(a.itemPatientFormModalLab.phone=n)})("keyup",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.onKeyUpInputNumberPhone())}),e.qZA()(),e.YNc(40,z,2,0,"span",60),e.qZA(),e.TgZ(41,"ion-col")(42,"ion-item")(43,"ion-label",19),e._UZ(44,"ion-icon",51),e._uU(45," \u0110\u1ecba ch\u1ec9 "),e.TgZ(46,"span",58),e._uU(47,"*"),e.qZA()(),e.TgZ(48,"ion-input",63),e.NdJ("ngModelChange",function(n){e.CHM(t);const a=e.oxw();return e.KtG(a.itemPatientFormModalLab.address=n)})("keyup",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.onKeyUpInputAddress())}),e.qZA()(),e.YNc(49,$,2,0,"span",60),e.qZA(),e.TgZ(50,"ion-col"),e.YNc(51,W,9,1,"ion-item",11),e.qZA(),e.TgZ(52,"ion-item")(53,"ion-label",57),e._UZ(54,"ion-icon",64),e._uU(55," Ghi ch\xfa "),e.qZA(),e.TgZ(56,"ion-input",65),e.NdJ("ngModelChange",function(n){e.CHM(t);const a=e.oxw();return e.KtG(a.itemPatientFormModalLab.notes=n)}),e.qZA()()(),e.TgZ(57,"div",66)(58,"ion-buttons",67)(59,"ion-button",15),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.nextModalPatient())}),e._uU(60," L\u01b0u v\xe0 th\xeam m\u1edbi ... "),e.qZA()()()()}if(2&i){const t=e.oxw();e.xp6(6),e.Oqu(t.titleModalAddPatient),e.xp6(5),e.Q6J("innerHTML",t.instructionModalPatient,e.oJD),e.xp6(9),e.Q6J("interfaceOptions",t.customAlertOptionsRequestType)("ngModel",t.itemPatientFormModalLab.valueRequestType),e.xp6(1),e.Q6J("ngForOf",t.listTypeOrder),e.xp6(1),e.Q6J("ngIf",t.validFormInput.isEmptyRequestType),e.xp6(8),e.Q6J("ngModel",t.itemPatientFormModalLab.name),e.xp6(1),e.Q6J("ngIf",t.validFormInput.isEmptyFullName),e.xp6(8),e.Q6J("ngModel",t.itemPatientFormModalLab.phone),e.xp6(1),e.Q6J("ngIf",t.validFormInput.isEmptyNumberPhone),e.xp6(8),e.Q6J("ngModel",t.itemPatientFormModalLab.address),e.xp6(1),e.Q6J("ngIf",t.validFormInput.isEmptyAdress),e.xp6(2),e.Q6J("ngIf","true"),e.xp6(5),e.Q6J("ngModel",t.itemPatientFormModalLab.notes)}}const ee=[{path:"",component:(()=>{class i{constructor(t,o,n,a,c,u,_,oe,ae,le,re,se,ue,ce,ge,me,de,pe){this.photoService=t,this.popoverController=o,this.router=n,this.platform=a,this.localStorage=c,this.storage=u,this.navCtrl=_,this.pickerCtrl=oe,this.actionSheetCtrl=ae,this.notificationService=le,this.mainService=re,this.badgeService=se,this.appVersion=ue,this.alertController=ce,this.orderService=ge,this.loadingCtrl=me,this.datePipe=de,this.generalService=pe,this.isPopoverOpenFilter=!1,this.titleModalAddPatient="Th\xeam y\xeau c\u1ea7u",this.instructionModalPatient="M\u1eddi nh\u1eadp th\xf4ng tin b\u1ec7nh nh\xe2n \u0111\u1ea7u ti\xean:",this.numberOfNewPatients=0,this.isModalOpenFormPatient=!1,this.validFormInput={isEmptyRequestType:!1,isEmptyFullName:!1,isEmptyNumberPhone:!1,isEmptyAdress:!1},this.customPopoverOptions={subHeader:"Ch\u1ecdn tr\u1ea1ng th\xe1i \u0111\u01a1n h\xe0ng c\u1ea7n l\u1ecdc"},this.itemPatientFormModalLab={valueRequestType:0,name:"",phone:"",address:"",timeSample:this.datePipe.transform(new Date,"yyyy-MM-ddTHH:mm:ss"),notes:""},this.listPatientLab=[{name:"1234-1643 Tr\u1ea7n V\u0103n A",phone:"0981123574",address:"CT6 Khu \u0111\xf4 th\u1ecb Vi\u1ec7t H\u01b0ng, Long Bi\xean, H\xe0 N\u1ed9i",conditon:"Vi\xeam lo\xe9t d\u1ea1 d\xe0y t\xe1 tr\xe0ng",status:"Ch\u01b0a nh\u1eadn y\xeau c\u1ea7u",notes:""},{name:"1234 - 2341 Tr\u1ea7n Th\u1ecb L\xfd",phone:"0234538592",address:"257 Gi\u1ea3i ph\xf3ng, Hai B\xe0 Tr\u01b0ng, H\xe0 N\u1ed9i",conditon:"S\u1ed1t xu\u1ea5t huy\u1ebft",status:"\u0110\xe3 nh\u1eadn y\xeau c\u1ea7u v\xe0 \u0111ang x\u1eed l\xfd",notes:""},{name:"1234 - 1643 L\xfd Thu\u1ef3 Linh",phone:"0903245394",address:"40 Ph\u01b0\u1eddng Li\u1ec7t, Thanh Xu\xe2n, H\xe0 N\u1ed9i",conditon:"Vi\xeam gan A",status:"\u0110\xe3 tr\u1ea3 k\u1ebft qu\u1ea3",notes:""}],this.listOrder=[],this.listRequest=[],this.listPartner=[],this.listTypeOrder=[],this.formFilterTestSheet={namePatient:"",phoneNoPatient:"",orderStatus:0},this.filterInterval={isShow:!1,presentTime:"",pastTime:""},this.customAlertOptionsRequestType={header:"Ch\u1ecdn lo\u1ea1i y\xeau c\u1ea7u",translucent:!0},this.now=new Date,this.listPatientLab=[{name:"1234-1643 Tr\u1ea7n V\u0103n A",phone:"0981123574",address:"CT6 Khu \u0111\xf4 th\u1ecb Vi\u1ec7t H\u01b0ng, Long Bi\xean, H\xe0 N\u1ed9i",conditon:"Vi\xeam lo\xe9t d\u1ea1 d\xe0y t\xe1 tr\xe0ng",status:"Ch\u01b0a nh\u1eadn y\xeau c\u1ea7u",notes:""},{name:"1234 - 2341 Tr\u1ea7n Th\u1ecb L\xfd",phone:"0234538592",address:"257 Gi\u1ea3i ph\xf3ng, Hai B\xe0 Tr\u01b0ng, H\xe0 N\u1ed9i",conditon:"S\u1ed1t xu\u1ea5t huy\u1ebft",status:"\u0110\xe3 nh\u1eadn y\xeau c\u1ea7u v\xe0 \u0111ang x\u1eed l\xfd",notes:""},{name:"1234 - 1643 L\xfd Thu\u1ef3 Linh",phone:"0903245394",address:"40 Ph\u01b0\u1eddng Li\u1ec7t, Thanh Xu\xe2n, H\xe0 N\u1ed9i",conditon:"Vi\xeam gan A",status:"\u0110\xe3 tr\u1ea3 k\u1ebft qu\u1ea3",notes:""}]}onKeyUpInputNamePatient(){this.validFormInput.isEmptyFullName=this.isEmpty(this.itemPatientFormModalLab.name)}onKeyUpInputNumberPhone(){this.validFormInput.isEmptyNumberPhone=this.isEmpty(this.itemPatientFormModalLab.phone)}onKeyUpInputAddress(){this.validFormInput.isEmptyAdress=this.isEmpty(this.itemPatientFormModalLab.address)}ionViewDidLoad(){console.log("ionViewDidLoad")}ionViewWillLeave(){console.log("ionViewWillLeave")}ionViewDidLeave(){console.log("ionViewDidLeave")}ionViewWillUnload(){console.log("ionViewWillUnload")}ionViewDidEnter(){console.log("ionViewDidEnter")}ionViewWillEnter(){return(0,g.Z)(function*(){console.log("ionViewWillEnter")})()}ngOnInit(){var t=this;return(0,g.Z)(function*(){console.log("ngOnInit"),t.localStorage.getSelectedUser().then(n=>{t.userInfo=n}),yield t.getListInitialData(),yield t.getListRequestByPayload({page:1,pageSize:100,fromDate:null,toDate:null,phone:null,partnerId:null,receiveUserId:null,called:null,arrived:null,arrivedLabo:null,warning:null,received:null,requestTypeId:null,userCreated:null,canceled:!1},!0),yield t.getListOrderType()})()}showLoading(){var t=this;return(0,g.Z)(function*(){(yield t.loadingCtrl.create({message:"D\u1eef li\u1ec7u \u0111ang t\u1ea3i l\xean sau 2 gi\xe2y ...",duration:2e3})).present()})()}getListOrder(){this.showLoading(),this.orderService.getOrders({barcode:"",patient:"",status:0,fromDate:"",toDate:"",assignToUserId:0,counselors:null,partnerId:0,isSendSMS:null,isPrintResult:null,patientAge:null,phoneNo:null,keyword:"",pageSize:50,page:1}).subscribe(o=>{null!=o&&(this.listOrder=o.data,console.log("this.listOrder : ",this.listOrder))},o=>{403===o.status?(this.notificationService.showMessage("danger","Ng\u01b0\u1eddi d\xf9ng c\xf3 quy\u1ec1n truy c\u1eadp"),this.router.navigate(["/login"])):this.notificationService.showMessage("danger","D\u1eef li\u1ec7u tr\u1ea3 v\u1ec1 \u0111\xe3 c\xf3 l\u1ed7i x\u1ea3y ra")})}getListOrderType(){this.generalService.getListRequestType().subscribe(t=>{null!==t&&(console.log("getListOrderType res: ",t),this.listTypeOrder=t.filter(o=>"LM"===o.requestTypeCode||"TM"===o.requestTypeCode))},t=>{})}getListRequestByPayload(t,o){o&&this.showLoading(),this.generalService.getRequest(t).subscribe(n=>{null!=n&&(this.listRequest=n.data,console.log("this.listRequest : ",this.listRequest))},n=>{403===n.status?(this.notificationService.showMessage("danger","Ng\u01b0\u1eddi d\xf9ng c\xf3 quy\u1ec1n truy c\u1eadp"),this.router.navigate(["/login"])):this.notificationService.showMessage("danger","D\u1eef li\u1ec7u tr\u1ea3 v\u1ec1 \u0111\xe3 c\xf3 l\u1ed7i x\u1ea3y ra")})}getListInitialData(){this.initDatas=JSON.parse(localStorage.getItem(d.s.INIT_DATA))}presentPopoverFilter(t){this.popoverFormFilter.event=t,this.isPopoverOpenFilter=!0}getListPartner(){this.generalService.getListPartner().subscribe(t=>{this.listPartner=t},t=>{})}showProfile(){}logout(){this.localStorage.clearAll(),this.popoverController.dismiss(),this.router.navigate(["/"])}doRefresh(t){}setOpenModalAddPatient(t){this.isModalOpenFormPatient=t}openModalPatientLab(){this.instructionModalPatient="M\u1eddi nh\u1eadp th\xf4ng tin b\u1ec7nh nh\xe2n \u0111\u1ea7u ti\xean:",this.numberOfNewPatients=0,this.resetFormModalPatient(),this.restartValidFormAddPatient(),this.setOpenModalAddPatient(!0)}restartValidFormAddPatient(){this.validFormInput.isEmptyAdress=!1,this.validFormInput.isEmptyFullName=!1,this.validFormInput.isEmptyNumberPhone=!1,this.validFormInput.isEmptyRequestType=!1}cancelModalAddPatient(){this.setOpenModalAddPatient(!1)}confirmPatientModal(){const t=!this.isEmpty(this.itemPatientFormModalLab.name);this.validFormInput.isEmptyFullName=!t;const o=!this.isEmpty(this.itemPatientFormModalLab.phone);this.validFormInput.isEmptyNumberPhone=!o;const n=!this.isEmpty(this.itemPatientFormModalLab.address);this.validFormInput.isEmptyAdress=!n;const a=0!==this.itemPatientFormModalLab.valueRequestType;return this.validFormInput.isEmptyRequestType=!a,t&&o&&n&&a}saveModalAddPatient(){this.confirmPatientModal()&&(this.listPatientLab.push(JSON.parse(JSON.stringify(this.itemPatientFormModalLab))),this.generalService.addRequest({partnerId:this.userInfo.id,userId:0,dateCreated:null,appointmentDate:this.itemPatientFormModalLab.timeSample,receiveTime:null,arriveTime:null,completeTime:null,arriveLaboTime:null,returnResultReceiveTime:null,returnResultAppointmentDate:null,returnResultCompleteTime:null,address:this.itemPatientFormModalLab.address,phone:this.itemPatientFormModalLab.phone,requestTypeId:this.itemPatientFormModalLab.valueRequestType,requestSourceId:0,comment:"",receiveUserId:0}).subscribe(o=>{o.ret&&0!==o.ret[0].code?this.notificationService.showMessage(d.s.ERROR,o.ret[0].message):this.notificationService.showMessage(d.s.SUCCESS,d.s.MESSAGE_ADD_SUCCESS)}))}nextModalPatient(){this.confirmPatientModal()&&(this.listPatientLab.push(JSON.parse(JSON.stringify(this.itemPatientFormModalLab))),this.numberOfNewPatients++,this.instructionModalPatient=`\u0110\xe3 th\xeam <strong>${this.numberOfNewPatients}</strong> b\u1ec7nh nh\xe2n. M\u1eddi nh\u1eadp th\xf4ng tin b\u1ec7nh nh\xe2n ti\u1ebfp theo:`,this.resetFormModalPatient())}onWillDismiss(t){}resetFormModalPatient(){this.itemPatientFormModalLab={valueRequestType:0,name:"",phone:"",address:"",timeSample:this.datePipe.transform(new Date,"yyyy-MM-ddTHH:mm:ss"),notes:""}}handleChangeSearch(t){var o=this;return(0,g.Z)(function*(){o.keywordSearch=t.target.value,o.getListRequestByPayload({page:1,pageSize:100,textSearch:o.keywordSearch,fromDate:null,toDate:null,phone:null,partnerId:null,receiveUserId:null,called:null,arrived:null,arrivedLabo:null,warning:null,received:null,requestTypeId:null,userCreated:null,canceled:!1},!1)})()}handleChangeSelectOrderStatus(t){var o=this;return(0,g.Z)(function*(){o.formFilterTestSheet.orderStatus=t.target.value})()}handleChangeFilterInterval(t){const o=t.target.value,n=new Date,a=new Date;n.setHours(0,0,0,0);const c=a.getDay();let u;switch(o){case 1:this.filterInterval.isShow=!1,u=0,n.setDate(n.getDate()-u),console.log("\u0110\u1ea7u ng\xe0y h\xf4m nay",n);break;case 2:this.filterInterval.isShow=!1,u=1,n.setDate(n.getDate()-u),console.log("C\xe1ch \u0111\xe2y 1 ng\xe0y tr\u01b0\u1edbc",n);break;case 3:this.filterInterval.isShow=!1,u=7,n.setDate(n.getDate()-u),console.log("C\xe1ch \u0111\xe2y 7 ng\xe0y",n);break;case 4:this.filterInterval.isShow=!1,u=14,n.setDate(n.getDate()-u),console.log("C\xe1cg \u0111\xe2y 14 ng\xe0y",n);break;case 5:this.filterInterval.isShow=!1,u=30,n.setDate(n.getDate()-u),console.log("C\xe1ch \u0111\xe2y 30 ng\xe0y",n);break;case 6:this.filterInterval.isShow=!1,u=0===c?6:c-1,n.setDate(n.getDate()-u),console.log("\u0110\u1ea7u tu\u1ea7n n\xe0y",n);break;case 7:this.filterInterval.isShow=!1,u=c+7-1,console.log("daysToSubtract",u),n.setDate(n.getDate()-u),console.log(" \u0110\u1ea7u tu\u1ea7n tr\u01b0\u1edbc",n);break;case 8:this.filterInterval.isShow=!1,n.setDate(1),console.log("\u0110\u1ea7u th\xe1ng n\xe0y",n);break;case 9:this.filterInterval.isShow=!1,n.setDate(1),n.setMonth(n.getMonth()-1),console.log("\u0110\u1ea7u th\xe1ng tr\u01b0\u1edbc ",n);break;case 10:this.filterInterval.isShow=!0,this.filterInterval.pastTime=this.datePipe.transform(n,"yyyy-MM-ddTHH:mm:ss"),this.filterInterval.presentTime=this.datePipe.transform(a,"yyyy-MM-ddTHH:mm:ss")}this.getListRequestByPayload({page:1,pageSize:100,fromDate:n,toDate:a,phone:null,partnerId:null,receiveUserId:null,called:null,arrived:null,arrivedLabo:null,warning:null,received:null,requestTypeId:null,userCreated:null,canceled:!1},!0)}handleChangeFilterIntervalCustomByUser(t){var o=this;return(0,g.Z)(function*(){console.log("handleChangeFilterIntervalCustomByUser event",t),o.getListRequestByPayload({page:1,pageSize:100,fromDate:o.filterInterval.pastTime,toDate:o.filterInterval.presentTime,phone:null,partnerId:null,receiveUserId:null,called:null,arrived:null,arrivedLabo:null,warning:null,received:null,requestTypeId:null,userCreated:null,canceled:!1},!1)})()}handleChangeRequestType(t){console.log("handleChangePartner event: ",t),this.validFormInput.isEmptyRequestType=0===t.target.value}handleChangeTimeSample(t){}onSearchByFormFilter(){this.getListRequestByPayload({page:1,pageSize:100,textSearch:this.formFilterTestSheet.namePatient,fromDate:null,toDate:null,phone:this.formFilterTestSheet.phoneNoPatient,partnerId:null,receiveUserId:null,called:null,arrived:null,arrivedLabo:null,warning:null,received:null,requestTypeId:null,userCreated:null,canceled:!1},!0),this.popoverFormFilter.dismiss()}restartFormFilter(){this.formFilterTestSheet.namePatient="",this.formFilterTestSheet.phoneNoPatient="",this.orderStatusSelect.value=0}pushLog(t){console.log(t)}cancelFormFilter(){this.popoverFormFilter.dismiss()}isEmpty(t){return(new C.i).transform(t)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(P.T),e.Y36(r.Dh),e.Y36(h.F0),e.Y36(r.t4),e.Y36(b.V),e.Y36(M.K),e.Y36(r.SH),e.Y36(r.up),e.Y36(r.BX),e.Y36(E.g),e.Y36(Z.J),e.Y36(L.A),e.Y36(y.b),e.Y36(r.Br),e.Y36(x),e.Y36(r.HT),e.Y36(m.uU),e.Y36(F.m))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-laboratory"]],viewQuery:function(t,o){if(1&t&&(e.Gf(r.ki,5),e.Gf(I,5),e.Gf(O,5)),2&t){let n;e.iGM(n=e.CRH())&&(o.modal=n.first),e.iGM(n=e.CRH())&&(o.popoverFormFilter=n.first),e.iGM(n=e.CRH())&&(o.orderStatusSelect=n.first)}},decls:27,vars:6,consts:[[1,"ion-padding"],[2,"display","flex"],["autocomplete","on","placeholder","T\xecm ki\u1ebfm ...",3,"ionChange"],["slot","start",3,"click"],["slot","icon-only","name","funnel-outline"],["size","auto",3,"isOpen","didDismiss"],["popoverFormFilter",""],[2,"display","flex","align-items","center"],["slot","start","name","calendar-clear-outline","color","primary"],["aria-label","times","interface","alert","placeholder","Ch\u1ecdn kho\u1ea3ng th\u1eddi gian l\u1ecdc ...",3,"ionChange"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"content-laboratory"],[4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed"],[3,"click"],["name","add-outline"],[3,"isOpen"],[2,"font-size","small"],["position","stacked"],["name","person-outline"],["placeholder","Nh\u1eadp t\xean b\u1ec7nh nh\xe2n ...",3,"ngModel","ngModelChange"],["name","call-outline"],["type","tel","placeholder","Nh\u1eadp S\u0110T ...",3,"ngModel","ngModelChange"],["name","send-outline"],["label","Tr\u1ea1ng th\xe1i \u0110\u01a1n h\xe0ng","interface","alert","label-placement","floating","placeholder","Tr\u1ea1ng th\xe1i \u0111\u01a1n h\xe0ng",2,"font-size","small",3,"interfaceOptions","ionChange"],["orderStatusSelect",""],["style","font-size: small;",3,"value",4,"ngFor","ngForOf"],[2,"display","flex","justify-content","space-evenly","margin-top","0.5rem"],["size","small","fill","outline","color","medium","title","Hu\u1ef7",3,"click"],["name","close-outline"],["size","small","fill","outline","color","danger","title","Xo\xe1 l\u1ecdc",3,"click"],["size","small","name","trash-outline"],["size","small","fill","solid","title","L\u1ecdc d\u1eef li\u1ec7u ...",3,"click"],["size","small","name","search-outline"],[2,"font-size","small",3,"value"],[3,"value"],["datetime","from-datetime",2,"font-size","small"],[3,"keepContentsMounted"],["locale","vi-VI","id","from-datetime",3,"ngModel","showDefaultTitle","showDefaultButtons","showClearButton","ngModelChange","ionChange"],["fromDatetime",""],["slot","title"],["datetime","toDatetime",2,"font-size","small"],["locale","vi-VI","id","toDatetime",3,"ngModel","showDefaultTitle","showDefaultButtons","showClearButton","min","ngModelChange","ionChange"],["toDatetime",""],["class","name-patient",4,"ngIf"],["class","info",4,"ngIf"],[1,"status"],[1,"name-patient"],[1,"info"],[1,"text"],["name","location-outline"],[1,"text","address"],["name","pulse-outline"],["slot","start"],["slot","end"],[3,"innerHTML"],["position","floating"],[2,"color","red"],["aria-label","parterns","placeholder","Ch\u1ecdn lo\u1ea1i y\xeau c\u1ea7u ...",3,"interfaceOptions","ngModel","ionChange","ngModelChange"],["class","m-error",4,"ngIf"],["type","text","placeholder","Nh\u1eadp t\xean b\u1ec7nh nh\xe2n ...",3,"ngModel","ngModelChange","keyup"],["type","tel","placeholder","888-888-8888",3,"ngModel","ngModelChange","keyup"],["type","text","placeholder","Nh\u1eadp \u0111\u1ecba ch\u1ec9 ...",3,"ngModel","ngModelChange","keyup"],["name","pencil-outline"],["type","text","placeholder","Th\xeam ghi ch\xfa ...",3,"ngModel","ngModelChange"],[2,"margin-top","1rem","display","flex","justify-content","end"],["slot","primary"],[1,"m-error"],[2,"display","flex","flex-direction","column"],["datetime","time",2,"margin-top","0.5rem","margin-bottom","0.25rem"],["size","small","locale","vi-VI","id","time",3,"ngModel","showDefaultTitle","showDefaultButtons","showClearButton","ngModelChange","ionChange"]],template:function(t,o){1&t&&(e.TgZ(0,"ion-content",0)(1,"div")(2,"div")(3,"div",1)(4,"ion-searchbar",2),e.NdJ("ionChange",function(a){return o.handleChangeSearch(a)}),e.qZA(),e.TgZ(5,"ion-buttons",3),e.NdJ("click",function(a){return o.presentPopoverFilter(a)}),e.TgZ(6,"ion-button"),e._UZ(7,"ion-icon",4),e.qZA()(),e.TgZ(8,"ion-popover",5,6),e.NdJ("didDismiss",function(){return o.isPopoverOpenFilter=!1}),e.YNc(10,q,28,4,"ng-template"),e.qZA()(),e.TgZ(11,"div",7)(12,"ion-list")(13,"ion-item"),e._UZ(14,"ion-icon",8),e.TgZ(15,"ion-select",9),e.NdJ("ionChange",function(a){return o.handleChangeFilterInterval(a)}),e.YNc(16,w,2,2,"ion-select-option",10),e.qZA()(),e.YNc(17,U,6,1,"ion-item",11),e.YNc(18,R,6,1,"ion-item",11),e.qZA()()(),e.TgZ(19,"div",12)(20,"ion-list"),e.YNc(21,G,10,7,"ion-item",13),e.qZA()()(),e.TgZ(22,"ion-fab",14)(23,"ion-fab-button",15),e.NdJ("click",function(){return o.openModalPatientLab()}),e._UZ(24,"ion-icon",16),e.qZA()()(),e.TgZ(25,"ion-modal",17),e.YNc(26,X,61,14,"ng-template"),e.qZA()),2&t&&(e.xp6(8),e.Q6J("isOpen",o.isPopoverOpenFilter),e.xp6(8),e.Q6J("ngForOf",o.initDatas.baoCaoDoanhSoType),e.xp6(1),e.Q6J("ngIf",o.filterInterval.isShow),e.xp6(1),e.Q6J("ngIf",o.filterInterval.isShow),e.xp6(3),e.Q6J("ngForOf",o.listRequest),e.xp6(4),e.Q6J("isOpen",o.isModalOpenFormPatient))},dependencies:[r.YG,r.Sm,r.wI,r.W2,r.x4,r.Mj,r.IJ,r.W4,r.Gu,r.gu,r.pK,r.Ie,r.Q$,r.q_,r.VI,r.t9,r.n0,r.wd,r.sr,r.ki,r.d8,r.QI,r.j9,m.sg,m.O5,p.JJ,p.On,S],styles:[".m-error[_ngcontent-%COMP%]{position:relative;z-index:1;margin-left:.8rem;min-height:18px;font-size:small;color:var(--ion-color-danger)}.content-laboratory[_ngcontent-%COMP%]{overflow:auto;max-height:calc(100vh - 15.5rem)}.content-laboratory[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{display:flex;flex-direction:column}.content-laboratory[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h3.name-patient[_ngcontent-%COMP%]{font-weight:600}.content-laboratory[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   div.info[_ngcontent-%COMP%]{display:flex;padding:.25rem}.content-laboratory[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   div.info[_ngcontent-%COMP%]   h3.text[_ngcontent-%COMP%]{margin-left:.25rem}.content-laboratory[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   div.info[_ngcontent-%COMP%]   h3.address[_ngcontent-%COMP%]{white-space:break-spaces}.content-laboratory[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   div.status[_ngcontent-%COMP%]{display:inline-block;padding:.25rem;margin-top:.25rem;border-radius:.25rem;background-color:#b5e0ff}"]}),i})()}];let te=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[h.Bz.forChild(ee),h.Bz]}),i})();var ne=s(3913);let ie=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[y.b],imports:[r.Pc,m.ez,p.u5,v.e,te,ne.m]}),i})()}}]);