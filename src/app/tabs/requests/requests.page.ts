/* eslint-disable max-len */
import { Component, OnInit, ViewChild } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import {
  ActionSheetController,
  AlertController,
  IonSelect,
  LoadingController,
  NavController,
  PickerController,
  Platform,
  PopoverController
} from '@ionic/angular';
import { Constant } from '../../shared/constants/constant.class';
import { StorageService } from '../../services/storage.service';
import { NotificationService } from '../../services/notification.service';
import { MainService } from '../../services/main.service';
import { environment } from '../../../environments/environment';
import { BadgeService } from '../../services/badge.service';
import { AppVersion } from '@ionic-native/app-version/ngx';

import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { IsEmptyPipe } from 'src/app/shared/pipe/is-empty.pipe';
import { OrderService } from 'src/app/services/order.service';
import { GeneralService } from 'src/app/services/general-service';

@Component({
  selector: 'app-requests',
  templateUrl: 'requests.page.html',
  styleUrls: ['requests.page.scss']
})
export class RequestsPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  @ViewChild('popoverFormFilter') popoverFormFilter;
  @ViewChild('modalFormFilterRequest') modalFormFilterRequest;
  @ViewChild('orderStatusSelect') orderStatusSelect: IonSelect;
  @ViewChild('requestType') requestType: IonSelect;
  now: any;
  userInfo: any;
  isPopoverOpenFilter = false;
  keywordSearch: any;


  titleModalAddPatient = 'Thêm yêu cầu';
  instructionModalPatient = 'Mời nhập thông tin bệnh nhân :';
  numberOfNewPatients = 0;
  isModalOpenFormPatient = false;


  validFormInput = {
    isEmptyRequestType: false,
    // isEmptyFullName: false,
    isEmptyNumberPhone: false,
    isEmptyAdress: false,
    isEmptyTimeSample: false,
  };



  customPopoverOptions = {
    // header: 'Trạng thái đơn hàng',
    subHeader: 'Chọn trạng thái đơn hàng cần lọc',
    // message: 'Chỉ chọn một TTĐH',
  };

  itemPatientFormModalLab = {
    valueRequestType: 0,
    name: '',
    phone: '1',
    address: '1',
    timeSample: this.datePipe.transform(new Date(), 'yyyy-MM-ddTHH:mm:ss'),
    notes: '',
  };

  listPatientLab = [
    {
      name: '1234-1643 Trần Văn A',
      phone: '0981123574',
      address: 'CT6 Khu đô thị Việt Hưng, Long Biên, Hà Nội',
      conditon: 'Viêm loét dạ dày tá tràng',
      status: 'Chưa nhận yêu cầu',
      notes: '',
    },

    {
      name: '1234 - 2341 Trần Thị Lý',
      phone: '0234538592',
      address: '257 Giải phóng, Hai Bà Trưng, Hà Nội',
      conditon: 'Sốt xuất huyết',
      status: 'Đã nhận yêu cầu và đang xử lý',
      notes: '',
    },

    {
      name: '1234 - 1643 Lý Thuỳ Linh',
      phone: '0903245394',
      address: '40 Phường Liệt, Thanh Xuân, Hà Nội',
      conditon: 'Viêm gan A',
      status: 'Đã trả kết quả',
      notes: '',
    }
  ];

  // Chức dữ liệu cơ sở, khởi tạo ban đầu.
  initDatas: any;

  // Danh sách các Phiểu xét nghiếm
  listOrder: any[] = [];

  // Danh sách yêu cầu Xét nghiệm
  listRequest: any[] = [];

  // Danh sách đối tác
  listPartner = [];
  partnerByID: any;

  // Danh sách các loại yêu cầu
  listTypeOrder = [];

  // Form lọc theo filter
  formFilterTestSheet = {
    valueRequestTypePatient: 0,
    namePatient: '',
    phoneNoPatient: '',
    addressPatient: '',
    orderStatus: 0,
  };

  filterInterval = {
    isShow: false,
    presentTime: '',
    pastTime: '',
  };

  customAlertOptionsRequestType = {
    header: 'Chọn loại yêu cầu',
    // subHeader: '',
    // message: '',
    translucent: true,
  };


  constructor(public photoService: PhotoService,
    private popoverController: PopoverController,
    private router: Router,
    private platform: Platform,
    private localStorage: StorageService,
    private storage: Storage,
    public navCtrl: NavController,
    private pickerCtrl: PickerController,
    private actionSheetCtrl: ActionSheetController,
    private notificationService: NotificationService,
    private mainService: MainService,
    public badgeService: BadgeService,
    private appVersion: AppVersion,
    private alertController: AlertController,
    private orderService: OrderService,
    private loadingCtrl: LoadingController,
    private datePipe: DatePipe,
    private generalService: GeneralService,
  ) {
    this.now = new Date();


    this.listPatientLab = [
      {
        name: '1234-1643 Trần Văn A',
        phone: '0981123574',
        address: 'CT6 Khu đô thị Việt Hưng, Long Biên, Hà Nội',
        conditon: 'Viêm loét dạ dày tá tràng',
        status: 'Chưa nhận yêu cầu',
        notes: '',
      },

      {
        name: '1234 - 2341 Trần Thị Lý',
        phone: '0234538592',
        address: '257 Giải phóng, Hai Bà Trưng, Hà Nội',
        conditon: 'Sốt xuất huyết',
        status: 'Đã nhận yêu cầu và đang xử lý',
        notes: '',
      },

      {
        name: '1234 - 1643 Lý Thuỳ Linh',
        phone: '0903245394',
        address: '40 Phường Liệt, Thanh Xuân, Hà Nội',
        conditon: 'Viêm gan A',
        status: 'Đã trả kết quả',
        notes: '',
      }
    ];
  }


  onKeyUpInputNamePatient() {
    // Set is show message error Fullname
    // this.validFormInput.isEmptyFullName = this.isEmpty(this.itemPatientFormModalLab.name);
  }

  onKeyUpInputNumberPhone() {
    // Set is show message error Numberphone
    this.validFormInput.isEmptyNumberPhone = this.isEmpty(this.itemPatientFormModalLab.phone);
  }


  onKeyUpInputAddress() {
    // Set is show message error Address
    this.validFormInput.isEmptyAdress = this.isEmpty(this.itemPatientFormModalLab.address);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  async ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  async ngOnInit() {



    // console.log('ngOnInit');
    this.localStorage.getSelectedUser().then((res: any) => {
      this.userInfo = res;
      console.log('this.userInfo: ', this.userInfo);


      this.getPartnerByID(this.userInfo.partnerId);
      console.log('this.partnerByID: ', this.partnerByID);

      // Lấy dữ liệu danh sách yêu cầu xét nghiệm
      this.getAllListRequest();
      // const payload = {
      //   page: 1,
      //   pageSize: 100,
      //   // textSearch: null,
      //   // fromDate: null,
      //   // toDate: null,
      //   // phone: null,
      //   partnerId: this.userInfo.partnerId,
      //   // receiveUserId: null,
      //   // called: null,
      //   // arrived: null,
      //   // arrivedLabo: null,
      //   // warning: null,
      //   // received: null,
      //   // requestTypeId: null,
      //   // userCreated: null,
      //   // canceled: null,
      // };
      // this.getListRequestByPayload(payload, true);
    });



    // Lấy dữ liệu cho biến DS Dữ liệu khởi tạo
    // await this.getListInitialData();


    // Lấy dữ liệu danh sách phiếu xét nghiệm
    // await this.getListOrder();


    // Lấy danh sách loại yêu cầu
    await this.getListOrderType();


    // Lấy dữ liệu danh sách các đối tác
    // await this.getListPartner();
  }


  getListPartner() {
    this.generalService.getListPartner().subscribe(
      (res) => {
        this.listPartner = res;
      },
      (error) => { }
    );
  }


  getPartnerByID(id: any) {
    this.generalService.getPartner(id).subscribe((res: any) => {
      this.partnerByID = res;
    },
      (error: any) => {
      }
    );
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Dữ liệu đang tải lên ...',
      duration: 2000,
    });

    loading.present();
  }

  getListOrder() {
    // Show thông báo delay thời gian chờ loading dữ liệu
    this.showLoading();

    const payload = {
      barcode: '',
      patient: '',
      status: 0,
      fromDate: '',
      toDate: '',
      assignToUserId: 0,
      counselors: null,
      partnerId: 0,
      isSendSMS: null,
      isPrintResult: null,
      patientAge: null,
      phoneNo: null,
      keyword: '',
      pageSize: 50,
      page: 1,
    };
    this.orderService.getOrders(payload).subscribe(
      (res) => {
        if (res != null) {
          this.listOrder = res.data;
          // console.log('this.listOrder : ', this.listOrder);
        }
      },
      (error) => {
        if (error.status === 403) {
          this.notificationService.showMessage(Constant.DANGER, `Người dùng có quyền truy cập`);
          this.router.navigate(['/login']);
        } else {
          this.notificationService.showMessage(Constant.DANGER, `Dữ liệu trả về đã có lỗi xảy ra`);
        }
      });

  }

  getListOrderType() {
    this.generalService.getListRequestType().subscribe(
      (res) => {
        if (res !== null) {
          // console.log('getListOrderType res: ', res);
          this.listTypeOrder = res.filter(en => en.requestTypeCode === 'LM' || en.requestTypeCode === 'TM');
        }
      },
      (error) => {
      }
    );
  }

  getListRequestByPayload(payload: any, isLoading: boolean) {
    // Show thông báo delay thời gian chờ loading dữ liệu
    if (isLoading) {
      this.showLoading();
    }

    this.generalService.getRequest(payload).subscribe(
      (res: any) => {
        if (res != null) {
          this.listRequest = res.data;
          // console.log('this.listRequest : ', this.listRequest);
        }
      },
      (error) => {
        if (error.status === 403) {
          this.notificationService.showMessage(Constant.DANGER, `Người dùng có quyền truy cập`);
          this.router.navigate(['/login']);
        } else {
          this.notificationService.showMessage(Constant.DANGER, `Dữ liệu trả về đã có lỗi xảy ra`);
        }
      });

  }

  getAllListRequest() {
    const payload = {
      page: 1,
      pageSize: 100,
      // textSearch: null,
      // fromDate: null,
      // toDate: null,
      // phone: null,
      // partnerId: null,
      // receiveUserId: null,
      // called: null,
      // arrived: null,
      // arrivedLabo: null,
      // warning: null,
      // received: null,
      // requestTypeId: null,
      // userCreated: null,
      // canceled: false
    };
    this.getListRequestByPayload(payload, true);
  }

  // getListInitialData() {
  //   this.initDatas = JSON.parse(localStorage.getItem(Constant.INIT_DATA));
  // }

  presentModalFilter(e: Event) {
    // this.modalFormFilterRequest.event = e;
    this.isPopoverOpenFilter = true;
  }



  showProfile() {

  }

  logout() {
    this.localStorage.clearAll();
    this.popoverController.dismiss();
    this.router.navigate(['/']);
  }

  doRefresh($event) {

  }


  setOpenModalAddPatient(isOpen: boolean) {
    this.isModalOpenFormPatient = isOpen;
  }

  async openModalPatientLab() {
    // Reset lại lời dẫn
    this.instructionModalPatient = 'Mời tạo phiếu yêu cầu xét nghiệm:';
    this.numberOfNewPatients = 0;
    this.resetFormModalPatient();
    this.restartValidFormAddPatient();
    this.setOpenModalAddPatient(true);



  }

  restartValidFormAddPatient() {
    this.validFormInput.isEmptyAdress = false;
    // this.validFormInput.isEmptyFullName = false;
    this.validFormInput.isEmptyNumberPhone = false;
    this.validFormInput.isEmptyRequestType = false;

  }

  cancelModalAddPatient() {
    this.setOpenModalAddPatient(false);
    // this.modal.dismiss(null, 'cancel');
  }


  confirmPatientModal() {
    // const isName = !this.isEmpty(this.itemPatientFormModalLab.name);
    // this.validFormInput.isEmptyFullName = !isName;

    const isPhone = !this.isEmpty(this.itemPatientFormModalLab.phone);
    this.validFormInput.isEmptyNumberPhone = !isPhone;


    const isAddress = !this.isEmpty(this.itemPatientFormModalLab.address);
    this.validFormInput.isEmptyAdress = !isAddress;


    const isRequest = !(this.itemPatientFormModalLab.valueRequestType === 0);
    this.validFormInput.isEmptyRequestType = !isRequest;

    const isTimeSample = !this.isEmpty(this.itemPatientFormModalLab.timeSample);
    this.validFormInput.isEmptyTimeSample = !isTimeSample;

    return (isRequest && isPhone && isAddress && isTimeSample);
  }

  saveModalAddRequest() {
    if (this.confirmPatientModal()) {
      // Thêm mới một item Patient
      this.listPatientLab.push(JSON.parse(JSON.stringify(this.itemPatientFormModalLab)));

      const PARTNER_ID = 4;
      const item = {
        partnerId: PARTNER_ID,
        userId: this.userInfo.id,
        dateCreated: null,
        appointmentDate: this.itemPatientFormModalLab.timeSample,
        receiveTime: null,
        arriveTime: null,
        completeTime: null,
        arriveLaboTime: null,
        returnResultReceiveTime: null,
        returnResultAppointmentDate: null,
        returnResultCompleteTime: null,
        address: this.itemPatientFormModalLab.address,
        phone: this.itemPatientFormModalLab.phone,
        requestTypeId: this.itemPatientFormModalLab.valueRequestType,
        requestSourceId: null,
        comment: this.itemPatientFormModalLab.notes,
        receiveUserId: null,
      };
      this.generalService.addRequest(item).subscribe((res: any) => {
        if (res.ret && res.ret[0].code !== 0) {
          this.notificationService.showMessage(Constant.DANGER, res.ret[0].message);
        } else {
          // this.notificationService.showMessage(Constant.SUCCESS, Constant.MESSAGE_ADD_SUCCESS);
          this.notificationService.showMessage(Constant.SUCCESS, 'Tạo yêu cầu thành công!');
          this.getAllListRequest();
          this.setOpenModalAddPatient(false);
        }
      });
    } else {
      this.notificationService.showMessage(Constant.DANGER, 'Nhập thiếu  dữ liệu bắt buộc!');
    }

  }


  nextModalPatient() {
    if (this.confirmPatientModal()) {
      // Thêm mới một item Patient
      this.listPatientLab.push(JSON.parse(JSON.stringify(this.itemPatientFormModalLab)));

      // Thêm +1 bệnh nhân thành công. Tăng biến đếm số lượng bệnh nhân thêm mới thành công lên 1
      this.numberOfNewPatients++;

      // Thay đổ lời đầu modal kkhi thêm mới
      this.instructionModalPatient = `Đã thêm <strong>${this.numberOfNewPatients}</strong> bệnh nhân. Mời nhập thông tin bệnh nhân tiếp theo:`;

      // Reset form model lab
      this.resetFormModalPatient();
    };

  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {

    } else if (ev.detail.role === 'next') {

    }

  }

  resetFormModalPatient() {
    this.itemPatientFormModalLab = {
      valueRequestType: 0,
      name: '',
      phone: this.partnerByID.phone,
      address: this.partnerByID.address,
      timeSample: this.datePipe.transform(new Date(), 'yyyy-MM-ddTHH:mm:ss'),
      notes: '',
    };
  }


  async handleChangeSearch(event: any) {
    this.keywordSearch = event.target.value;


    const payload = {
      page: 1,
      pageSize: 100,
      textSearch: this.keywordSearch,
      fromDate: this.filterInterval.pastTime,
      toDate: this.filterInterval.presentTime,
      phone: this.formFilterTestSheet.phoneNoPatient,
      partnerId: this.userInfo.partnerId,
      // receiveUserId: null,
      // called: null,
      // arrived: null,
      // arrivedLabo: null,
      // warning: null,
      // received: null,
      requestTypeId: this.formFilterTestSheet.valueRequestTypePatient,
      // userCreated: null,
      // canceled: false
    };

    this.getListRequestByPayload(payload, false);

  }


  async handleChangeSelectOrderStatus(event: any) {
    this.formFilterTestSheet.orderStatus = event.target.value;
  }


  handleChangeFilterInterval(event: any) {
    const value = event.target.value;
    // let isShowFilterInterval = this.filterInterval.isShow;
    const pastTime = new Date();
    const presentTime = new Date();

    pastTime.setHours(0, 0, 0, 0);

    // Get the current day of the week (0-6, where Sunday is 0)
    const currentDay = presentTime.getDay();
    // Subtract the number of days elapsed in the current week
    let daysToSubtract: any;
    switch (value) {
      case 1:
        this.filterInterval.isShow = false;
        daysToSubtract = 0;
        pastTime.setDate(pastTime.getDate() - daysToSubtract);
        // console.log('Đầu ngày hôm nay', pastTime);
        break;
      case 2:
        // Subtract 1 day
        this.filterInterval.isShow = false;
        daysToSubtract = 1;
        pastTime.setDate(pastTime.getDate() - daysToSubtract);
        // console.log('Cách đây 1 ngày trước', pastTime);
        break;
      case 3:
        // Subtract 7 day
        this.filterInterval.isShow = false;
        daysToSubtract = 7;
        pastTime.setDate(pastTime.getDate() - daysToSubtract);
        // console.log('Cách đây 7 ngày', pastTime);
        break;
      case 4:
        // Subtract 14 day
        this.filterInterval.isShow = false;
        daysToSubtract = 14;
        pastTime.setDate(pastTime.getDate() - daysToSubtract);
        // console.log('Cách đây 14 ngày', pastTime);
        break;
      case 5:
        // Subtract 30 day
        this.filterInterval.isShow = false;
        daysToSubtract = 30;
        pastTime.setDate(pastTime.getDate() - daysToSubtract);
        // console.log('Cách đây 30 ngày', pastTime);
        break;
      case 6:
        // Đầu tuần này
        this.filterInterval.isShow = false;

        daysToSubtract = currentDay === 0 ? 6 : currentDay - 1;
        pastTime.setDate(pastTime.getDate() - daysToSubtract);
        // console.log('Đầu tuần này', pastTime);
        break;
      case 7:
        // Đầu tuần trước
        this.filterInterval.isShow = false;

        daysToSubtract = currentDay + 7 - 1;
        // console.log('daysToSubtract', daysToSubtract);
        pastTime.setDate(pastTime.getDate() - daysToSubtract);
        // console.log(' Đầu tuần trước', pastTime);
        break;
      case 8:
        // Đầu tháng này
        this.filterInterval.isShow = false;

        pastTime.setDate(1);
        // console.log('Đầu tháng này', pastTime);
        break;
      case 9:
        // Đầu tháng trước
        this.filterInterval.isShow = false;

        // Set the date to the first day of the current mounth
        pastTime.setDate(1);

        // Subtract one month from the date
        pastTime.setMonth(pastTime.getMonth() - 1);

        // console.log('Đầu tháng trước ', pastTime);
        break;
      case 10:
        // Hiện calender cho hai thời điểm lọc dữ liệu.
        this.filterInterval.isShow = true;
        break;
      default:
        this.filterInterval.isShow = false;
        break;
    }
    // Định dạng khoảng thời gian lọc
    if (value >= 1 && value <= 10) {

      this.filterInterval.pastTime = this.datePipe.transform(pastTime, 'yyyy-MM-ddTHH:mm:ss');

      this.filterInterval.presentTime = this.datePipe.transform(presentTime, 'yyyy-MM-ddTHH:mm:ss');
    } else {
      this.filterInterval.pastTime = '';

      this.filterInterval.presentTime = '';
    }

    const payload = {
      page: 1,
      pageSize: 100,
      textSearch: this.keywordSearch,
      fromDate: this.filterInterval.pastTime,
      toDate: this.filterInterval.presentTime,
      phone: this.formFilterTestSheet.phoneNoPatient,
      partnerId: this.userInfo.partnerId,
      // receiveUserId: null,
      // called: null,
      // arrived: null,
      // arrivedLabo: null,
      // warning: null,
      // received: null,
      requestTypeId: this.formFilterTestSheet.valueRequestTypePatient,
      // userCreated: null,
      // canceled: false
    };

    this.getListRequestByPayload(payload, true);
  }

  async handleChangeFilterIntervalCustomByUser(event: any) {
    // console.log('handleChangeFilterIntervalCustomByUser event', event);
    const pastTime = this.filterInterval.pastTime;
    // console.log('pastTime: ',pastTime);
    const presentTime = this.filterInterval.presentTime;
    // console.log('presentTime: ',presentTime);

    const payload = {
      page: 1,
      pageSize: 100,
      textSearch: this.keywordSearch,
      fromDate: this.filterInterval.pastTime,
      toDate: this.filterInterval.presentTime,
      phone: this.formFilterTestSheet.phoneNoPatient,
      partnerId: this.userInfo.partnerId,
      // receiveUserId: null,
      // called: null,
      // arrived: null,
      // arrivedLabo: null,
      // warning: null,
      // received: null,
      requestTypeId: this.formFilterTestSheet.valueRequestTypePatient,
      // userCreated: null,
      // canceled: false
    };

    this.getListRequestByPayload(payload, false);
  }

  handleChangeRequestType(event: any) {

    // console.log('handleChangePartner event: ', event);
    const value = event.target.value;
    // this.itemPatientFormModalLab.valueRequestType = value;
    this.validFormInput.isEmptyRequestType = (value === 0);

  }

  handleChangeTimeSample(event: any) {

  }

  onSearchByFormFilter() {
    const payload = {
      page: 1,
      pageSize: 100,
      textSearch: this.keywordSearch,
      fromDate: this.filterInterval.pastTime,
      toDate: this.filterInterval.presentTime,
      phone: this.formFilterTestSheet.phoneNoPatient,
      partnerId: this.userInfo.partnerId,
      // receiveUserId: null,
      // called: null,
      // arrived: null,
      // arrivedLabo: null,
      // warning: null,
      // received: null,
      requestTypeId: this.formFilterTestSheet.valueRequestTypePatient,
      // userCreated: null,
      // canceled: false
    };

    this.getListRequestByPayload(payload, true);

    this.modalFormFilterRequest.dismiss();
  }


  restartFormFilter() {
    this.formFilterTestSheet.namePatient = '';
    this.formFilterTestSheet.phoneNoPatient = '';
    this.formFilterTestSheet.valueRequestTypePatient = 0;
    this.requestType.value = 0;
    this.orderStatusSelect.value = 0;
  }

  pushLog(msg) {
    // console.log(msg);
  }

  cancelFormFilter() {
    this.modalFormFilterRequest.dismiss();
  }

  isEmpty(value: any) {
    return new IsEmptyPipe().transform(value);
  }
}
