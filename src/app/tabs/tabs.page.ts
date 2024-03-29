import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { AlertController, IonModal, IonTabs, ModalController, NavController } from '@ionic/angular';
import { BadgeService } from '../services/badge.service';
import { StorageService } from '../services/storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OverlayEventDetail } from '@ionic/core/components';
import { IsEmptyPipe } from '../shared/pipe/is-empty.pipe';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
import { Constant } from '../shared/constants/constant.class';
import { MenuController } from '@ionic/angular';
import { GeneralService } from 'src/app/services/general-service';
import { NotificationService } from '../services/notification.service';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements AfterViewInit {
  @ViewChild('tabs', { static: false }) tabs: IonTabs;
  @ViewChild('barCanvas1', { static: false }) barCanvas1: ElementRef;
  @ViewChild('barCanvas2', { static: false }) barCanvas2: ElementRef;
  @ViewChild('barCanvas3', { static: false }) barCanvas3: ElementRef;
  // @ViewChild(IonModal) modal!: IonModal;
  @ViewChild('modal_avatar') modalAvatar: IonModal;
  linkAvatarDefault = 'https://ionicframework.com/docs/img/demos/avatar.svg';
  public alertConfirmButtons = [
    {
      text: 'Huỷ',
      role: 'cancel',
      handler: () => {
        // this.handlerMessage = 'Alert canceled';
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        this.logoutAccount();
        // this.handlerMessage = 'Alert confirmed';
      },
    },
  ];
  barChart: any;
  contentAbout: any;
  // accCurrent: any = {};
  userInfo: any;
  titleApp = 'Xét nghiệm';
  titleContact = 'Liên hệ';
  selectedTab = 'tab1';
  tabHomeClickEvent: any;
  isModalOpenUser = false;
  isModalOpenSales = false;
  isModalOpenContact = false;
  isModalOpenContentAbout = false;
  isModalOpenFormEditInfoUser = false;
  listSrcAvatar = [
    'https://i.pravatar.cc/300?u=a',
    'https://i.pravatar.cc/300?u=b',
    'https://i.pravatar.cc/300?u=с',
    'https://i.pravatar.cc/300?u=d',
    'https://i.pravatar.cc/300?u=e',
    'https://i.pravatar.cc/300?u=f',
    'https://i.pravatar.cc/300?u=g',
    'https://i.pravatar.cc/300?u=h',
    'https://i.pravatar.cc/300?u=i',
    'https://i.pravatar.cc/300?u=j',
    'https://i.pravatar.cc/300?u=k',
    'https://i.pravatar.cc/300?u=l',
    'https://i.pravatar.cc/300?u=m',
    'https://i.pravatar.cc/300?u=n',
    'https://i.pravatar.cc/300?u=o',
    'https://i.pravatar.cc/300?u=p',
    'https://i.pravatar.cc/300?u=q',
    'https://i.pravatar.cc/300?u=r',
    'https://i.pravatar.cc/300?u=s',
    'https://i.pravatar.cc/300?u=t',
    'https://i.pravatar.cc/300?u=u',
    'https://i.pravatar.cc/300?u=v',
    'https://i.pravatar.cc/300?u=w',
    'https://i.pravatar.cc/300?u=x',
    'https://i.pravatar.cc/300?u=y',
    'https://i.pravatar.cc/300?u=z',
  ];


  userInfoShow = {
    linkAvatar: 'https://i.pravatar.cc/300?u=z',
    fullname: 'Nguyễn Văn Vở',
    code: '9167',
    phoneNo: '0934686465',
    address: 'Mỹ Đình, Nam Từ Liêm, Hà Nội',
    socialNetwork: {
      facebook: 'https://www.facebook.com/khongsovo',
      zalo: 'https://www.zalo.com/nocnhanhe',
      telegram: 'https://www.telegram.com/thoidibanoi',
      twitter: 'https://www.tiwtter.com/banlanhat'
    },
  };

  userInfoEdit = {
    linkAvatar: '',
    fullname: '',
    code: '',
    phoneNo: '',
    address: '',
    socialNetwork: {
      facebook: '',
      zalo: '',
      telegram: '',
      twitter: ''
    },
  };

  intervalId: any;

  constructor(
    public navCtrl: NavController,
    public badgeService: BadgeService,
    public localStorage: StorageService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modalController: ModalController,
    private alertController: AlertController,
    private changeDetectorRef: ChangeDetectorRef,
    private renderer: Renderer2,
    private httpClient: HttpClient,
    private menuController: MenuController,
    private generalService: GeneralService,
    private notificationService: NotificationService,
  ) {

  }

  setResult(ev: any) {
    const role = ev.detail.role;
    if (role === 'confirm') {
      // console.log(`Dismissed with role: ${ev.detail.role}`);
    } else if ('cancel') {

    }
  }



  async ngOnInit() {
    console.log('ngOnInit');

    App.addListener('appStateChange', ({ isActive }) => {
      // console.log('App state changed. Is active? root', isActive);
      const payload = {
        type: 0
      }
      let status = '';
      if (isActive) {
        payload.type = 1;
        status = 'mở';
      } else {
        payload.type = 2;
        status = 'đóng';
      }
      this.generalService.addTrackingLog(payload).subscribe((res) => {
        if (res.isValid) {
          // this.notificationService.showMessage(Constant.WARNING, `Hệ thống đã ghi lại thời điểm ${status} app!`);
        } else {
          // this.notificationService.showMessage(Constant.DANGER, `Đã có lỗi xảy ra khi ghi lại thời điểm ${status} app!`);
        }
      });
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
    clearInterval(this.intervalId);
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload');
  }



  ionViewDidEnter() {
    console.log('ionViewDidEnter');
    this.intervalId = setInterval(() => console.log('test'), 1000);
  }

  async ionViewWillEnter() {
    console.log('ionViewWillEnter');
    this.localStorage.getSelectedUser().then((res: any) => {
      // console.log('getSelectedUser', res);
      this.userInfo = res;
      // Ghép vào userInfoShow để hiện thị
      this.userInfoShow = {
        linkAvatar: this.userInfo.linkAvatar,
        fullname: this.userInfo.fullname,
        code: this.userInfo.staffCode,
        phoneNo: this.userInfo.phoneNo,
        address: this.userInfo.address,
        socialNetwork: {
          facebook: this.userInfo.facebook,
          zalo: this.userInfo.zalo,
          telegram: this.userInfo.telegram,
          twitter: this.userInfo.twitter
        },
      };
    });
  }



  loadContentAbout() {
    this.httpClient
      .get('https://invivolab.vn/gioi-thieu/', { responseType: 'text' })
      .subscribe((response) => {
        this.contentAbout = response;
      });
  }

  async loadWebsiteContent() {
    try {
      const response = await axios.get('https://invivolab.vn/gioi-thieu/');
      const websiteContent = response.data;;
    } catch (error) {
      // Xử lý lỗi khi tải nội dung trang web
      console.error(error);
    }
  }

  ngAfterViewInit() {
    // this.barChartMethod();
  }

  setOpenModalSales(isOpen: any) {
    // this.changeDetectorRef.detectChanges();
    this.isModalOpenSales = isOpen;
    // this.barChartMethod();
    setTimeout(() => this.barChartMethod(), 200);
  }

  barChartMethod() {
    console.log(this.barCanvas1);
    this.barChart = new Chart(this.barCanvas1.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Covid', 'Sốt xuất huyết', 'Ung thư', 'Sốt virus', 'Covid', 'NCP', 'Ung thư', 'Sốt virus', 'Covid', 'NCP'],
        datasets: [
          {
            label: 'Doanh số tổng',
            data: ['467', '576', '572', '79', '92',
              '574', '53', '576', '92', '504'],
            backgroundColor: 'blue',
            minBarLength: 2,
          },
          {
            label: 'Chiết khấu',
            data: ['542', '542', '536', '327', '17',
              '0.00', '538', '341', '92', '374'],
            backgroundColor: 'limegreen'
          },
          {
            label: 'Chưa thanh toán',
            data: ['542', '542', '536', '327', '17',
              '50', '538', '541', '92', '574'],
            backgroundColor: 'cyan'
          }]
      },
      options: {
        responsive: false,
        layout: {
          padding: {
            bottom: 42
          }
        },
        scales: {
          xAxes: [{
            ticks: {
              display: false
            },
            gridLines: {
              // drawOnChartArea: false,
              offsetGridLines: true
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
            gridLines: {
              // drawOnChartArea: false
            }
          }]
        },
        maintainAspectRatio: false
      }
    });

    this.barChart = new Chart(this.barCanvas3.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Covid', 'Sốt xuất huyết', 'Ung thư', 'Sốt virus', 'Covid', 'NCP', 'Ung thư', 'Sốt virus', 'Covid', 'NCP'],
        datasets: [
          {
            label: 'Doanh số tổng',
            data: ['467', '576', '572', '79', '92',
              '574', '53', '576', '92', '504'],
            backgroundColor: 'blue',
            minBarLength: 2,
          },
          {
            label: 'Chiết khấu',
            data: ['542', '542', '536', '327', '17',
              '0.00', '538', '341', '92', '374'],
            backgroundColor: 'limegreen'
          },
          {
            label: 'Chưa thanh toán',
            data: ['542', '542', '536', '327', '17',
              '50', '538', '541', '92', '574'],
            backgroundColor: 'cyan'
          }]
      },
      options: {
        responsive: false,
        scales: {
          xAxes: [{
            ticks: {
              display: true
            },
            gridLines: {
              // drawOnChartArea: false,
              offsetGridLines: true
            }
          }],
          yAxes: [{
            ticks: {
              display: false,
            },
            gridLines: {
              // drawOnChartArea: false
            }
          }]
        },
        maintainAspectRatio: false
      }
    });

    this.barChart = new Chart(this.barCanvas2.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Tuyến giáp', 'Sốt xuất huyết', 'Ung thư', 'Sốt virus', 'Covid', 'NCP'],
        datasets: [
          {
            label: 'Doanh số tổng',
            data: ['467', '576', '572', '79', '92',
              '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: 'Chiết khấu',
            data: ['542', '542', '536', '327', '17',
              '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          },
          {
            label: 'Chưa thanh toán',
            data: ['542', '542', '536', '327', '17',
              '0.00', '538', '541'],
            backgroundColor: 'cyan'
          }]
      },
      options: {
        responsive: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        maintainAspectRatio: false
      }
    });
    console.log(this.barChart);
    this.renderer.setProperty(this.barChart, 'width', 500);
  }


  tabClicked($event) {
    this.selectedTab = $event.tab;
  }

  ionTabsDidChange() {
    // console.log('tab ionTabsDidChange');
    // Stuff to switch icon from filled to outline and vice versa
  }

  onClickTab() {

  }

  logoutAccount() {
    localStorage.removeItem(Constant.TOKEN);
    this.localStorage.removeInfoUserStorage();
    this.router.navigate(['/login']);
  }

  async presentAlertLogout() {
    const alert = await this.alertController.create({
      header: 'Đăng xuất khỏi tài khoản của bạn?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            // this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.logoutAccount();
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    // this.roleMessage = `Dismissed with role: ${role}`;
  }

  async presentAlertContactSalesStaff() {
    this.titleContact = 'Liên hệ NVKD';
    const alert = await this.alertController.create({
      header: 'Thông báo',
      subHeader: 'Nhân viên CSKH của bạn là Trần Thị Mỹ Linh. SĐT: 0987548294.',
      message: 'Bạn có muốn gặp Trần Thị Mỹ Linh không?',
      buttons: [
        {
          text: 'Không',
          role: 'cancel',
          handler: () => {
            this.titleContact = 'Liên hệ';
            // this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'Liên hệ ngay',
          role: 'confirm',
          handler: () => {
            this.presentAlertNotification(
              'Thông báo',
              '',
              'Cảm ơn bạn đã gửi yêu cầu, Trần Thị Mỹ Linh sẽ liên hệ lại với bạn trong thời gian ngắn nhất.');
            // this.logoutAccount();
            // this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  async presentAlertContactSwitchboard() {
    this.titleContact = 'Liên hệ tổng đài';
    const alert = await this.alertController.create({
      header: 'Thông báo',
      subHeader: 'Tổng đài sẽ phụ trách các công việc lên đơn, phản ánh tình trạng kết quả muộn, ...',
      message: 'Bạn có muốn gặp tổng đài không?',
      buttons: [
        {
          text: 'Không',
          role: 'cancel',
          handler: () => {
            this.titleContact = 'Liên hệ';
          },
        },
        {
          text: 'Liên hệ ngay',
          role: 'confirm',
          handler: () => {
            this.presentAlertNotification(
              'Thông báo',
              '',
              'Cảm ơn bạn đã gửi yêu cầu, tổng đài sẽ liên hệ lại với bạn trong thời gian gần nhất.',);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  async presentAlertContactPaymentDepartment() {
    this.titleContact = 'Liên hệ Bộ phận thanh toán';
    const alert = await this.alertController.create({
      header: 'Thông báo',
      subHeader: 'Bộ phận thanh toán sẽ phụ trách các công việc liên quan tới thanh toán hóa đơn, công nợ, chiết khấu,...',
      message: 'Bạn có muốn gặp bộ phận thanh toán không?',
      buttons: [
        {
          text: 'Không',
          role: 'cancel',
          handler: () => {
            this.titleContact = 'Liên hệ';
          },
        },
        {
          text: 'Liên hệ ngay',
          role: 'confirm',
          handler: () => {
            this.presentAlertNotification(
              'Thông báo',
              '',
              'Bộ phận thanh toán sẽ sớm liên hệ lại với bạn');
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  async presentAlertNotification(header?: any, subHeader?: any, message?: any) {
    // this.titleContact = 'Liên hệ NVKD';
    const alert = await this.alertController.create({
      header,
      subHeader,
      message,
      buttons: [
        {
          text: 'Đóng',
          role: 'cancel',
          handler: () => {
            this.titleContact = 'Liên hệ';
            // this.handlerMessage = 'Alert canceled';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  // async showConfirmation() {
  //   const alert = await this.alertController.create({
  //     header: 'Xác nhận đăng xuất',
  //     message: 'Bạn có chắc chắn muốn đăng xuất?',
  //     buttons: [
  //       {
  //         text: 'Hủy',
  //         role: 'cancel',
  //       },
  //       {
  //         text: 'Đăng xuất',
  //         handler: () => {
  //           // Xử lý đăng xuất tại đây
  //         }
  //       }
  //     ]
  //   });

  //   await alert.present();
  // }

  closeModalInforAcc() {
    // this.modal.dismiss(null, 'close');
  }

  confirm() {
    // this.modal.dismiss('', 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'close') {
      // this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  setOpenModalUser(isOpen: any) {
    this.isModalOpenUser = isOpen;
  }

  setOpenModalContact(isOpen: any) {
    this.isModalOpenContact = isOpen;
  }

  setOpenModalContentAbout(isOpen: any) {
    this.isModalOpenContentAbout = isOpen;
  }



  setOpenModalFormEditInfoUser(isOpen: any) {
    this.isModalOpenFormEditInfoUser = isOpen;
    if (isOpen) {
      this.titleApp = 'Chỉnh sửa TT cá nhân';
    }
    this.userInfoEdit = JSON.parse(JSON.stringify(this.userInfoShow));
  }

  saveModalFormEditInfoUser() {
    this.isModalOpenFormEditInfoUser = false;
    //
    const newUserInfo = {
      id: this.userInfo.id,
      fullname: this.userInfoEdit.fullname,
      phoneNo: this.userInfoEdit.phoneNo,
      address: this.userInfoEdit.address,
      linkAvatar: this.userInfoEdit.linkAvatar,
      facebook: this.userInfoEdit.socialNetwork.facebook,
      zalo: this.userInfoEdit.socialNetwork.zalo,
      telegram: this.userInfoEdit.socialNetwork.telegram,
      twitter: this.userInfoEdit.socialNetwork.twitter
    };
    this.generalService.uploadUserInfo(newUserInfo).subscribe(
      (res: any) => {
        this.notificationService.showMessage(Constant.SUCCESS, `Cập nhận hồ sơ thành công`);
        this.userInfoShow = JSON.parse(JSON.stringify(this.userInfoEdit));
        this.updateUserInfo(res);
      },
      (error: any) => {

      }
    );
  }


  updateUserInfo(data: any) {
    this.userInfo.linkAvatar = this.userInfoShow.linkAvatar;
    this.userInfo.fullname = this.userInfoShow.fullname;
    this.userInfo.phoneNo = this.userInfoShow.phoneNo;
    this.userInfo.address = this.userInfoShow.address;
    this.userInfo.facebook = this.userInfoShow.socialNetwork.facebook;
    this.userInfo.zalo = this.userInfoShow.socialNetwork.zalo;
    this.userInfo.telegram = this.userInfoShow.socialNetwork.telegram;
    this.userInfo.twitter = this.userInfoShow.socialNetwork.twitter;

    this.localStorage.set(Constant.STORAGE_USERINFO, this.userInfo).then(
      (res) => {
        if (res) {
          console.log('Update UserInfo Local Storage Thành công!!!');
        } else {
          console.log('Update UserInfo Local Storage không thành công!!!');
        }
        // this.navCtrl.navigateRoot(['/main/requests']);
      },
      (err: any) => {
        console.log('Đã có lỗi xảy ra khi update UserInfo Local Storage');
      }
    );

  }

  openTabService() {
    this.selectedTab = 'services';
    this.titleApp = 'Thông tin dịch vụ';
    this.router.navigate(['/main/services']);
    this.menuController.close(); // Đóng menu
  }


  selectedAvatar(srcAvatar: any) {
    // console.log('src: ', srcAvatar);
    this.userInfoEdit.linkAvatar = srcAvatar;
    this.modalAvatar.dismiss();
  }

  showNotifications(){
    this.router.navigate(['/main/notifications']);
  }

  isEmpty(value: any) {
    return new IsEmptyPipe().transform(value);
  }
}
