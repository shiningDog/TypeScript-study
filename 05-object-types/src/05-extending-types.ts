// 扩展类型

interface BasicAddress {
  name: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}
// // 不优雅的定义方式
// interface AddressWithUnit {
//   name: string;
//   street: string;
//   city: string;
//   country: string;
//   postalCode: string;
//   unit: string;
// }

// 优雅的定义方式-扩展
interface AddressWithUnit extends BasicAddress {
  unit: string;
}

const addressWithUnit: AddressWithUnit = {
  unit: "7单元",
  street: "沙头街道",
  city: "深圳",
  postalCode: "1000",
  country: "中国",
  name: "felix",
};

interface ColorFul {
  color: string;
}
interface Circle {
  radius: number;
}

interface ColorCircle extends ColorFul, Circle {}

// const cc: ColorCircle = {
//   color: "red",
//   radius: 18,
// };
