import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  constructor() { }

  data: any = [];
  ngOnInit(): void {
    this.getImageAndDetail();
  }

  getImageAndDetail() {

    for (let index = 0; index < 12; index++) {
      const jsonData = {
        image: `${index}.jpg`
      };

      if (index === 0) {
        Object.assign(jsonData, { detail: `${index + 1}. เข้ามายังหน้าแรก` });
        this.data.push(jsonData);
      } else if (index === 1) {
        Object.assign(jsonData, { detail: `${index + 1}. เลือกสินค้าที่ต้องการ` });
        this.data.push(jsonData);
      } else if (index === 2) {
        Object.assign(jsonData, { detail: `${index + 1}. กดเข้าไปยังหน้าสินค้าที่เลือก` });
        this.data.push(jsonData);
      } else if (index === 3) {
        Object.assign(jsonData, {
          detail: `${index + 1}. กดเพิ่ม เพิ่มสินค้าลงรถเข็น
        สินค้าจะถูกเพิ่มไปยังรถเข็นและมีหน้าจอเลือกจำนวนสินค้าขึ้นมาให้เลือก ` });
        this.data.push(jsonData);
      } else if (index === 4) {
        Object.assign(jsonData, { detail: `${index + 1}. ปุ่มเพิ่มลงรถเข็นจะเปลี่ยนเป็น ไปยังรถเข็น กดปุ่มนั้น` });
        this.data.push(jsonData);
      } else if (index === 5) {
        Object.assign(jsonData, { detail: `${index + 1}. มายังหน้ารถเข็น (หรือตระกร้าสินค้า) จะเห็นรายละเอียดคำสั่งซื้อ กด ชำระเงิน` });
        this.data.push(jsonData);
      } else if (index === 6) {
        Object.assign(jsonData, { detail: `${index + 1}. เลือกขนส่งที่ต้องการให้ทำการจัดส่ง และกดปุ่ม สั่งซื้อ` });
        this.data.push(jsonData);
      } else if (index === 7) {
        Object.assign(jsonData, {
          detail: `${index + 1}. ถ้ายังไม่มีข้อมูลที่อยู่ลูกค้า ระบบจะให้ลูกค้ากรอกรายละเอียดการจัดส่ง
        เสร็จแล้วกดบันทึก` });
        this.data.push(jsonData);
      } else if (index === 8) {
        Object.assign(jsonData, {
          detail: `${index + 1}. เมื่อเพิ่มที่อยู่เสร็จระบบจะกลับมายังหน้านี้ (กรณีลูกค้าเคยสั่งซื้อสินค้าไปแล้ว
          จะไม่มีไปยังหน้าเพิ่มที่อยู่ใหม่) กด สั่งซื้อ` });
        this.data.push(jsonData);
      } else if (index === 9) {
        Object.assign(jsonData, {
          detail: `${index + 1}. ระบบจะทำการบันทึกข้อมูล และแสดงแจ้งเตือนทำรายการคำสั่งซื้อสำเร็จ กด ใช่
        เพื่อไปยังหน้าอัปโหลดหลักฐานการชำระเงิน` });
        this.data.push(jsonData);
      } else if (index === 10) {
        Object.assign(jsonData, { detail: `${index + 1}. กดแนบหลักฐานการชำระเงิน ระบบจะให้อัปโหลดรูปภาพสำหรับหลักฐานการชำระเงิน` });
        this.data.push(jsonData);
      } else if (index === 11) {
        Object.assign(jsonData, { detail: `${index + 1}. เมื่อสำเร็จระบบจะแจ้งเตือนว่า แนบหลักฐานการชำระเงินสำเร็จ` });
        this.data.push(jsonData);
      }
    }

    // this.data.push({
    //   image : '0.jpg',
    //   detail : '1. เข้ามายังหน้าแรก'
    // });

    // this.data.push({
    //   image : '1.jpg',
    //   detail : '2. เลือกสินค้าที่ต้องการ'
    // });

    // this.data.push({
    //   image: '2.jpg',
    //   detail: '3. เลือกสินค้าที่ต้องการ'
    // });

  }

}
