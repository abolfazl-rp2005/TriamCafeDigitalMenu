export const footerList = {
  fastAccessListWrapper: document.getElementById("js-ul-fast-access"),
  menuTriamListWrapper: document.getElementById("js-ul-menu"),
  fastAccessList: [
    "منو کافه تریام",
    "شعبه های کافه تریام",
    "پیگیری سفارش",
    "فروشگاه اینترنتی",
    "مقالات",
  ],
  menuTriamCafeList: [
    "سوالات متداول",
    "درباره ی ما",
    "ارتباط با ما",
    "قوانین و مقررات",
    "سیاست مرجوعی",
  ],
  licenseList: [
    "https://trustseal.enamad.ir/logo.aspx?id=223646&Code=IIXYXy1CipQqfWfLCSQH",
  ],
  generateList(index) {
    switch (index) {
      case 0:
        this.fastAccessList.forEach((item) => {
          const liElem = document.createElement("li");
          liElem.innerText = item;
          liElem.className = "text-white py-1";
          this.fastAccessListWrapper.append(liElem);
        });
        break;
      case 1:
        this.menuTriamCafeList.forEach((item) => {
          const liElem = document.createElement("li");
          liElem.innerText = item;
          liElem.className = "text-white py-1";
          this.menuTriamListWrapper.append(liElem);
        });
        break;
      case 2:
        break;
    }
  },
};
