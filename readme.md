## [跳出視窗位置提示]

## [結構說明]

有區分為首頁(index.html)，借還頁面(lend_borrow.html)

## [首頁]

說明: 目前切板僅是為了方便查看靜態頁面切板，再麻煩後端套用動態資料時，自行調整
(例如登入/登出改用session判斷後，可將 logo 上的登出 onclick 拔掉)

### 登入

點選  會員專區 > 登入  可切換到登入狀態

### 會員專區

(前面先登入)
點選 會員專區 > 會員專區細節

### 登出 

請點擊左上角 LOGO 

### 租借主頁

合作店家 > 米蘭餐盒按鈕


## [JS檔案]

主要功能函式詳見 local.js

```
assets/js/local.js
```

## [借還頁面]

借還頁面首頁，點選關閉後，會回到首頁(index.html)

在其他選單(借出, 歸還, 完成)，點選關閉則會會到借還首頁

主要功能函式一樣位於 local.js