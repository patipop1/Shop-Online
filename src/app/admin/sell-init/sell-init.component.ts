import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from './../../../environments/environment';
import { UtilService } from './../../util.service';


@Component({
  selector: 'app-sell-init',
  templateUrl: './sell-init.component.html',
  styleUrls: ['./sell-init.component.css']
})
export class SellInitComponent implements OnInit, OnDestroy {

  subscription: any;
  selected = 'กรุณาเลือก Shop';
  idSelected = '';

  listShop: any = {};
  url = '';
  shopName: any = {};

  selectedShopOption = '';

  dataConfigInitail: any = {};

  inputLiff = {
    detail: '',
    product: ''
  };

  constructor(
    public util: UtilService
  ) { }

  ngOnInit(): void {
    this.url = environment.url;

    this.getParameter();
    this.loadShopName();
    this.getShopNameMock();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  loadShopName(): void {
    this.subscription = this.util.db.object(`shop/list`).valueChanges().subscribe(res => {
      if (res !== null) {
        // this.listShop = res;
        console.log(this.listShop);
        this.getShopName(res);
      }
    });
    // this.subscription = this.util.firebaseDb.object(`shop/list`).valueChanges().subscribe( res => {
    //   if (res !== undefined && res !== null) {
    //     console.log(res);
    //   }
    // });
  }

  getShopName(data) {
    console.log(data);

    const keys = Object.keys(data);

    keys.forEach(shopid => {
      this.util.db.database.ref(`shop/info/${shopid}/name`).once('value').then(res => {
        if (res.val() !== null) {
          this.listShop[shopid] = res.val();
        }
      });
    });

  }

  chooseShop(shopid) {
    console.log(shopid);
    this.selected = this.listShop[shopid];
    this.idSelected = shopid;

  }

  getParameter() {
    // this.url = window.location.origin;
  }

  getShopNameMock() {
    this.getDataConfigInit();
    this.shopName = {
      11111124: 'NULL',
      '00000001': 'NULL',
      22222271: 'Event Maxxcar002',
      11111000: 'NULL',
      22222225: 'NULL',
      22222266: 'NULL',
      '00000106': 'CR068-กทม.(ตลาดไนน์ใหญ่)',
      22222265: ' Khonkean Event 16-28 ก.ค. 62',
      '00000107': 'CR069-กทม.(BigC สะพานควาย)',
      22222264: 'NULL',
      22222221: 'NULL',
      22222222: 'NULL',
      '00000017': 'NE001-อุบลราชธานี(เซ็นทรัลพลาซา อุบลราชธานี)',
      44444003: 'Litto - 003',
      '00000102': 'CR064-สมุทรปราการ(อิมพีเรียลเวิลด์ สำโรง)',
      '00000046': 'CR026-สมุทรสาคร(โลตัสกระทุ่มแบน)',
      '00000033': 'CR020-กทม.(ซีคอนบางแค2)',
      '00000038': 'NR002-เชียงใหม่',
      22222255: 'NULL',
      '00000113': 'CR074-นนทบุรี(เซ็นทรัล เวสต์เกต สาขา 1)',
      '00000015': 'SR002-ภูเก็ต',
      11111116: 'NULL',
      '00000096': 'ER010-ฉะเชิงเทรา',
      22222252: 'NULL',
      '00000058': 'NULL',
      '00000095': 'CR059-กทม.(เดอะ พาซิโอ พาร์ค)',
      '00000019': 'CR011-กทม.(ซีคอน บางแค)',
      '00000076': 'NE010-นครราขสีมา(โรงพยาบาลมหาราช)',
      22222262: 'NULL',
      '00000068': 'NULL',
      11111139: 'TME 30-2/02/2020',
      22222229: 'NULL',
      '00000063': 'ER007-ชลบุรี(อมตะนคร)',
      '00000014': 'CR008-กทม.(เซ็นทรัลเฟสติวัล อีสต์วิลล์)',
      '00000112': 'CR073-ปทุมธานี(ฟิวเจอร์พาร์ค รังสิต)',
      '00000081': 'CR048-กทม.(เซ็นทรัลพระราม 2)',
      '00000108': 'CR070-นครปฐม(ม.ศิลปากร)',
      '00000010': 'SR001-สงขลา(หาดใหญ่)',
      22222261: 'NULL',
      11111135: 'NULL',
      22222254: 'NULL',
      '00000065': 'CR037-อยุธยา',
      22222243: 'NULL',
      '00000103': 'CR066-กทม.(Showroom TNP CAR)',
      '00000064': 'CR036-กทม.(SC Plaza (สายใต้ใหม่))',
      '00000054': 'NE009-ขอนแก่น(ตลาดต้นตาล)',
      '00000030': 'CR18',
      '00000084': 'CR050-สมุทรสาคร(สาขา 2)',
      22222231: 'NULL',
      '00000072': 'NE008-ชัยภูมิ(โรบินสันชัยภูมิ)',
      11111131: 'NULL',
      '00000051': 'CR029-นครปฐม(สนามจันทร์)',
      '00000021': 'NULL',
      11111119: 'NULL',
      '00000091': 'CR056-กทม.(WK Fortune)',
      '00000011': 'CR013-กทม.(WK 555)',
      '00000018': 'CR010-กทม.(พันธุ์ทิพย์ ประตูน้ำ)',
      22222239: 'NULL',
      22222272: 'Event Maxxcar003',
      22222253: 'NULL',
      '00000002': 'CR002-กทม.(555 เสือป่ามาร์เก็ต)',
      '00000048': 'CR027-ลพบุรี',
      11111120: 'NULL',
      66666666: 'Remax Claim',
      22222259: 'NULL',
      '00000025': 'NULL',
      22222249: 'NULL',
      '00000111': 'ER011-ชลบุรี(โรบินสันบ่อวิน)',
      11111123: 'NULL',
      33333332: 'Remax กล่องบุบ',
      '00000053': 'NR006-เชียงราย',
      '00000101': 'CR065-กทม.(BTS กรุงธนบุรี)',
      22222263: 'NULL',
      22222256: 'NULL',
      22222230: 'NULL',
      22222235: 'NULL',
      33333335: 'A Shop',
      '00000035': 'CR022-นนทบุรี (WKพันทิพย์งามวงศ์วาน)',
      '00000082': 'CR049-กทม.(AC market สายไหม)',
      22222258: 'NULL',
      '00000056': 'NULL',
      22222277: 'Event บ้านและสวน',
      '00000042': 'ER006-ตราด(คุณเอ๋2)',
      '00000057': 'NE006-ขอนแก่น(คอมเพล็กซ์-ม.ขอนแก่น)',
      22222226: 'NULL',
      22222269: 'Event ตึกมาลีนนท์',
      '00000036': 'CR023-กทม.(WKฟอร์จูน)',
      22222260: 'NULL',
      '00000022': 'NULL',
      '00000087': 'CR053-นนทบุรี(เดอะมอลล์ งามวงศ์วาน)',
      22222268: 'Event เหวิน  23-30 ส.ค.',
      '00000070': 'CR041-นนทบุรี(ศูนย์ราชการ แจ้งวัฒนะ)',
      22222224: 'NULL',
      '00000083': 'ER009-ชลบุรี(แหลมฉบัง)',
      '00000067': 'CR039-กทม.(เพลินนารี่ มอลล์)',
      11111133: 'NULL',
      '00000055': 'CR030-กทม.(Remax Bigshop)',
      11111121: 'NULL',
      '00000039': 'ER005-ระยอง(เซ็นทรัลพลาซา ระยอง)',
      22222251: 'NULL',
      '00000109': 'CR071-นนทบุรี(โรบินสัน ศรีสมาน)',
      '00000034': 'WR002-เพชรบุรี(โรบินสัน เพชรบุรี)',
      '00000026': 'NULL',
      22222276: 'Event พระราม 2',
      11111129: 'NULL',
      22222238: 'NULL',
      '00000073': 'CR043-กทม.(เดอะมอลล์ บางกะปิ)',
      11111128: 'NULL',
      '00000110': 'CR072-กทม.(Proda)',
      '00000020': 'CR012-สมุทรสาคร(บิ๊กซี มหาชัย)',
      '00000027': 'CR016-กทม.(เซ็นทรัล ปิ่นเกล้า)',
      22222257: 'NULL',
      '00000069': 'NE007-นครราชสีมา(ปากช่อง)',
      '00000009': 'CR009-ปทุมธานี(เซียร์รังสิต)',
      '00000052': 'NE005-นครราชสีมา(เซ็นทรัลพลาซา นครราชสีมา)',
      '00000007': 'CR006-สมุทรสาคร(มหาชัย)',
      '00000037': 'CR019-ปทุมธานี(the grove สายไหม)',
      22222274: 'Event Maxxcar004',
      '00000078': 'SR003-ระนอง',
      '00000099': 'CR062-กทม.(เซ็นทรัลลาดพร้าว)',
      22222248: 'NULL',
      22222223: 'NULL',
      '00000008': 'CR004-กทม.(REMAX SHOP ข้างธนาคารกสิกร ถนนเสือป่า)',
      '00000024': 'ER002-ตราด(เมืองตราด)',
      11111130: 'NULL',
      '00000098': 'CR061-กทม.(ซอยสุคนธสวัสดิ์)',
      '00000006': 'CR003-กทม.(ฟอร์จูน ชั้น 2)',
      22222241: 'NULL',
      '00000085': 'CR051-สมุทรปราการ(โรบินสันสมุทรปราการ)',
      22222236: 'NULL',
      11111117: 'NULL',
      '00000104': 'CR067-กทม.(ซีคอนศรีนครินทร์)',
      22222242: 'NULL',
      '00000071': 'CR042-กทม.(ศูนย์การค้าเกตเวย์ บางซื่อ)',
      '00000003': 'Test',
      '00000066': 'CR038-นนทบุรี(ท่าน้ำนนท์)',
      22222228: 'NULL',
      11111136: 'NULL',
      '00000023': 'NE003-ศรีสะเกษ(กันทรารมย์)',
      '00000100': 'CR063-กทม.(โรบินสัน ลาดกระบัง)',
      '00000088': 'NR007-เชียงราย(บ้านดู่)',
      '00000012': 'CR007-สมุทรปราการ(สำโรง)',
      '00000040': 'NR003-เชียงใหม่(พันทิพย์)',
      '00000013': 'ER001-ชลบุรี',
      33333333: 'NULL',
      44444001: 'Litto - 001',
      '00000016': 'CR014-กทม.(ฟอร์จูน ชั้น 3)',
      22222275: 'Event Empire',
      '00000043': 'CR025-นนทบุรี(เซ็นทรัล เวสต์เกต)',
      '00000062': 'CR035-กทม.(วิคตอเรียการ์เด้น บางแค)',
      22222246: 'NULL',
      11111118: 'NULL',
      '00000028': 'CR017-สมุทรปราการ(MegaBangna) ',
      22222244: 'NULL',
      '00000005': 'NULL',
      '00000004': 'NULL',
      '00000029': 'NR001-ลำปาง(Remax ลำปาง)',
      22222250: 'NULL',
      '00000077': 'CR045-กทม.(The market)',
      '00000059': 'CR032-กทม.(Big C พระราม 4)',
      11111115: 'NULL',
      '00000032': 'ER004-จันทบุรี',
      '00000061': 'CR034-พิษณุโลก',
      11111132: 'NULL',
      '00000041': 'CR024-กทม.(ซีคอนศรีนครินทร์)',
      '00000089': 'CR054-กทม.(เซ็นทรัล แกรนด์ พระราม 9)',
      '00000044': 'NULL',
      '00000079': 'CR046-กทม.(เดอะมอลล์ท่าพระ)',
      22222227: 'NULL',
      22222237: 'NULL',
      11111134: 'NULL',
      '00000093': 'CR057-นนทบุรี(เซ็นทรัล รัตนาธิเบศร์)',
      '00000047': 'CR018-กทม.(บิ๊กซีสะพานควาย)',
      33333331: 'Remax-Test',
      22222232: 'NULL',
      11111127: 'NULL',
      22222273: 'Event  ตึกซัน',
      11111137: 'NULL',
      22222234: 'NULL',
      '00000090': 'CR055-สระบุรี(SB สระบุรี)',
      22222240: 'NULL',
      '00000031': 'CR021-นครปฐม',
      22222267: 'Event  ตึกสินธรทาวเวอร์1',
      '00000092': 'Shop คุณสุรเดช',
      '00000050': 'CR028-กทม.(เดอะมอลล์ บางแค)',
      '00000105': 'NE011-ขอนแก่น(ประตูน้ำขอนแก่น)',
      44444004: 'Litto - 004',
      22222233: 'NULL',
      '00000097': 'CR060-กทม.(เมเจอร์รัชโยธิน)',
      '00000094': 'CR058-กทม.(สามย่านมิตรทาวน์)',
      44444002: 'Litto - 002',
      11111114: 'NULL',
      11111111: 'NULL',
      11111112: 'NULL',
      11111113: 'NULL',
      '00000075': 'CR044-อ่างทอง',
      '00000086': 'CR052-ปทุมธานี(มหาวิทยาลัยรังสิต)',
      '00000080': 'CR047-กทม.(จามจุรีสแควร์)',
      11111125: 'NULL',
      11111138: 'Remax TME 3-6',
      22222247: 'NULL',
      '00000060': 'CR033-กทม.(ท่าน้ำศิริราช)',
      '00000074': 'ER008-ชลบุรี(พัทยาเหนือ)',
      22222270: 'NULL',
      '00000049': 'NULL',
      44444005: 'Litto - 005',
      22222245: 'NULL',
      11111122: 'NULL',
      88888888: 'สำนักงานใหญ่',
      '00000045': 'NULL'

    };
  }

  getDataConfigInit() {
    this.dataConfigInitail = {
      active: true,
      canSeeGroup: true,
      canSell: true,
      line: {
        liffDetail: '1654026787-16EeonaP',
        liffProduct: '1653990310-rWL1ndev',
        lineId: '@786vcivh',
        userInit: 'Ud09695412c5c0eef47c4b5dbbc3bd7bf'
      },
      payment: [{
        active: true,
        id: 'xxx-xxx-xxxx',
        name: 'ประวิตร นาฬิกา',
        type: 'PromptPay'
      }, {
        active: true,
        bank: 'ธนาคารกรุงไทย',
        id: '1156230265',
        name: 'ประวิตร นาฬิกา',
        type: 'bank'
      }],
      printer: '1671E568',
      search: {
        keyword: {
          ขวดน้ำเก็บความร้อน: 6,
          สายชาร์จ: 2,
          เจลล้างมือ: 4
        }
      },
      sellPrice: 3,
      shipment: {
        '00': true,
        '01': true,
        '02': true
      },
      shipmentFree: {
        '01': true
      },
      shipmentPriceOption: 4,
      system: {
        background: 'fire',
        canGetInShop: true,
        canSell: true,
        expireTime: 72,
        expiredOrder: true,
        freePostShip: true
      }
    };
  }

  selectedOption(shopid) {
    console.log(shopid);
    this.selectedOption = this.shopName[shopid];
  }

  async confirmAddShop() {
    console.log('confirm Add Shop');
    console.log(this.selectedShopOption);
    const check: any = await this.checkInShopName(this.selectedShopOption);
    if (check.success) {
      const checkHave = await this.checkRepeatShop(check.shopId);
      console.log(checkHave);
      if (!checkHave) {
        this.util.db.database.ref(`shop/list/${check.shopId}`).set(true);
        this.util.db.database.ref(`shop/config/${check.shopId}`).update(this.dataConfigInitail);
        // เป็นไอดีเริ่มต้น Ud09695412c5c0eef47c4b5dbbc3bd7bf
        /* ตรง ID นี้ต้องเปลี่ยนให้เป็นของ Sell คนใดคนนึงก่อนด้วย (รอวันผลงานจริง) */
        this.util.db.database.ref(`member/shop/${check.shopId}/Ud09695412c5c0eef47c4b5dbbc3bd7bf/active`).set(true);
        this.util.db.database.ref(`member/shop/${check.shopId}/Ud09695412c5c0eef47c4b5dbbc3bd7bf/owner`).set(true).then(() => {
          // closeLoading();
          this.selectedShopOption = '';
          this.util.smartModal.getModal('addShopOnlineModal').close();
        });
      } else {
        alert('ช็อปนี้ได้ทำการเปิดไปแล้วค่ะ !!!');
      }
    }


    // this.util.smartModal.getModal('addShopOnlineModal').close();
  }

  async checkRepeatShop(shopId) {
    return new Promise((resolve, reject) => {
      this.util.db.database.ref(`shop/list/${shopId}`).once('value').then(res => {
        if (res.val()) {
          resolve(res.val());
        } else {
          resolve(false);
        }
      });
    });
    // let check = false;
    // await this.util.db.database.ref(`shop/list/${shopId}`).once('value').then(res => {
    //   // check = res
    //   console.log(res.val());
    //   if (res.val() !== null) {
    //     check = res.val();
    //   } else {
    //     check = false;
    //   }
    // });
    // console.log(check);
    // return check;
  }

  checkInShopName(shopNameAdd) {
    console.log(shopNameAdd);
    return new Promise((resolve, reject) => {
      const shopIdAdd = shopNameAdd.split(' :')[0];
      const pattern = /^\d{8}$/;

      if (shopIdAdd.match(pattern)) { // ถ้ารหัส Shop ไม่เท่ากับ 8 หลัก
        // alert('กรอกข้อมูลถูกแล้วจร้า');
        resolve({ success: true, shopId: shopIdAdd });

      } else {
        alert('กรุณากรอกข้อมูลให้ถูกต้องด้วยค่ะ');
        reject(false);
      }
      console.log(shopIdAdd);
    });





  }

  closeAddShopModal() {
    this.selectedShopOption = '';
    this.util.smartModal.getModal('addShopOnlineModal').close();
  }

  openModalLiffAdd() {
    this.util.smartModal.getModal('addLiffModal').open();
    this.util.db.database.ref(`shop/config/${this.idSelected}/line`).once('value').then((res: any) => {
      // console.log(res);
      const data = res.val();
      this.inputLiff.detail = data.liffDetail;
      this.inputLiff.product = data.liffProduct;

    });
  }

  confirmAddLiff() {
    console.log(this.idSelected);
    console.log(this.inputLiff);

    this.util.db.database.ref(`shop/config/${this.idSelected}/line/liffDetail`).set(this.inputLiff.detail);
    this.util.db.database.ref(`shop/config/${this.idSelected}/line/liffProduct`).set(this.inputLiff.product);
    alert('เพิ่มข้อมูล Liff สำเร็จค่ะ ');
    this.util.smartModal.getModal('addLiffModal').close();



  }

  closeAddLiffModal() {
    this.util.smartModal.getModal('addLiffModal').close();
  }

}
