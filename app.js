const SITE_TITLE = "犬貓行為與就診壓力篩檢";
const SITE_SUBTITLE =
  "協助記錄犬貓在日常生活、陌生人、其他動物、分離、觸碰、就診或環境變化下的行為反應，可作為行為諮詢、低壓力就診計畫與 PVPs 調整的參考。";

const ASSESSMENTS = [
  {
      id: "c-barq",
      shortTitle: "犬 C-BARQ 架構版",
      navTitle: "犬標準行為篩檢",
      navRef: "C-BARQ",
      title: "犬行為與氣質篩檢 (C-BARQ 架構參考版)",
      subtitle: "依 14 個犬行為分類與 miscellaneous behaviors 整理的臨床記錄工具",
      intro:
        "請回想狗狗最近一段時間在日常生活、外出、互動、分離、觸碰與就診情境中的反應。0 分代表未觀察到、不適用或完全沒有；4 分代表反應明顯、頻繁或強烈。",
      notice:
        "本頁依 C-BARQ 文獻與公開說明整理為院內篩檢/追蹤版，並非官方 C-BARQ 題本逐字重製。結果應以分類小計輔助問診與行為諮詢，不作為單獨診斷。",
      interpretationMode: "tracking-only",
      direction: "lower",
      totalLabel: "行為關注總分",
      qualityLabel: "行為穩定指標",
      scale: {
        min: 0,
        max: 4,
        labels: {
          0: "未觀察到 / 不適用 / 完全沒有",
          1: "輕微或偶爾",
          2: "中等或有時",
          3: "明顯或經常",
          4: "非常明顯或幾乎每次",
        },
      },
      categories: [
        {
          name: "陌生人相關攻擊",
          english: "Stranger-directed aggression",
          items: [
            "陌生成人靠近、注視或伸手時，出現吠叫、低吼、撲衝或咬人的威脅反應。",
            "陌生兒童靠近、跑動或伸手互動時，出現明顯防禦或攻擊反應。",
            "外出牽繩時遇到陌生人靠近，反應明顯升高而難以轉移。",
            "家中有訪客進入或移動時，出現持續警戒、阻擋或攻擊性表現。",
          ],
        },
        {
          name: "家人相關攻擊",
          english: "Owner-directed aggression",
          items: [
            "家人拿取食物、玩具、睡墊或其他重要資源時，出現護資源反應。",
            "家人要求停止某項行為、離開家具或移動位置時，出現低吼、齜牙或反抗。",
            "家人擦腳、梳毛、穿戴胸背或項圈時，出現攻擊或強烈拒絕。",
            "與熟悉照顧者互動時，情緒突然升高且難以預測。",
          ],
        },
        {
          name: "陌生人恐懼",
          english: "Stranger-directed fear",
          items: [
            "陌生人主動靠近時，出現退縮、躲避、發抖或夾尾。",
            "陌生人伸手觸碰或彎腰靠近時，明顯焦慮或想逃離。",
            "在戶外或公共場所遇到陌生人時，需要較長時間才能恢復平靜。",
            "訪客在家中停留時，長時間躲藏或無法正常休息。",
          ],
        },
        {
          name: "非社交恐懼",
          english: "Nonsocial fear",
          items: [
            "對雷聲、煙火、施工、車聲或突然聲響有強烈驚嚇反應。",
            "對吸塵器、吹風機、輪椅、滑板等物件或設備明顯害怕。",
            "在陌生環境、樓梯、電梯或特殊地面材質中不敢前進。",
            "遇到新物品或環境變化時，需要很久才能接近或探索。",
          ],
        },
        {
          name: "其他犬相關攻擊",
          english: "Dog-directed aggression",
          items: [
            "外出時看到陌生犬靠近，出現撲衝、吠叫、低吼或攻擊姿態。",
            "在牽繩、圍欄或空間受限時，對其他犬的反應更強烈。",
            "與其他犬共處資源、空間或人類注意力時，容易出現衝突。",
            "犬隻互動後仍長時間保持亢奮或警戒，難以恢復。",
          ],
        },
        {
          name: "其他犬恐懼",
          english: "Dog-directed fear",
          items: [
            "陌生犬靠近或嗅聞時，出現躲避、僵住、夾尾或求助照顧者。",
            "犬隻吠叫、快速移動或追逐時，明顯害怕或想逃走。",
            "在獸醫院、寵物店或公園遇到其他犬時，無法維持平靜。",
            "與其他犬接觸後，出現長時間緊張、喘氣或拒絕活動。",
          ],
        },
        {
          name: "同住犬競爭",
          english: "Dog rivalry",
          items: [
            "與同住犬爭奪食物、玩具、床位、門口或照顧者注意力。",
            "同住犬靠近照顧者或資源時，出現阻擋、威嚇或攻擊。",
            "同住犬移動、經過或進出空間時，容易引發緊張或追逐。",
            "同住犬衝突後，需要人為隔離才容易恢復。",
          ],
        },
        {
          name: "分離相關行為",
          english: "Separation-related behavior",
          items: [
            "被單獨留在家中或與主要照顧者分開時，出現持續吠叫、哀鳴或嚎叫。",
            "分離時破壞門窗、家具、籠具或試圖逃脫。",
            "分離時流口水、喘氣、踱步、排泄或食慾下降。",
            "照顧者準備外出時，即開始明顯焦慮或黏著。",
          ],
        },
        {
          name: "依附與注意力尋求",
          english: "Attachment and attention-seeking",
          items: [
            "在家中長時間跟隨照顧者，難以獨自休息。",
            "照顧者與他人或其他動物互動時，會硬擠到中間、擋住對方，或一直要求關注。",
            "無法立即得到回應時，出現持續吠叫、扒抓、跳撲或推擠。",
            "日常環境中很難自行安定下來。",
          ],
        },
        {
          name: "訓練與回應困難",
          english: "Trainability challenges",
          items: [
            "在有聲音、氣味、動物或人群干擾時，難以回應已學會的指令。",
            "被喚回、停止或轉移注意力時，需要多次提示才有反應。",
            "面對食物、玩具或外界刺激時，很難維持等待或放鬆。",
            "新的規則、路線或照護步驟需要很長時間才能適應。",
          ],
        },
        {
          name: "追逐與掠捕樣行為",
          english: "Chasing",
          items: [
            "看到貓、鳥、小動物、腳踏車、機車或跑動的人時，會突然追逐。",
            "追逐行為開始後，很難用呼喚或食物中斷。",
            "在車道、馬路或開放空間中，追逐衝動造成安全疑慮。",
            "看到快速移動物體時，身體緊繃、盯視或準備衝出。",
          ],
        },
        {
          name: "興奮度",
          english: "Excitability",
          items: [
            "準備散步、搭車、玩耍或迎接人時，興奮到難以控制。",
            "遇到訪客、門鈴、電話或外界聲音時，反應快速升高。",
            "興奮後需要很長時間才能恢復安定。",
            "興奮時容易跳撲、啃咬、撞人或拉扯牽繩。",
          ],
        },
        {
          name: "觸碰敏感",
          english: "Touch sensitivity",
          items: [
            "觸碰腳、耳朵、尾巴、嘴巴或腹部時，出現退縮、低吼或張口威脅。",
            "剪指甲、清耳朵、刷牙、擦藥或洗澡時，壓力反應明顯。",
            "獸醫檢查、量體溫、抽血或戴口罩時，很難安全配合。",
            "被陌生人或不熟悉人員觸碰時，反應比平常更強烈。",
          ],
        },
        {
          name: "活動量與能量",
          english: "Energy level",
          items: [
            "日常活動量高到難以滿足或影響居家安定。",
            "缺乏足夠活動時，容易出現破壞、吠叫或煩躁。",
            "活動後仍難以休息，持續尋求刺激。",
            "活動量突然明顯改變，影響日常生活或照護安排。",
          ],
        },
        {
          name: "其他行為與就診壓力",
          english: "Miscellaneous behaviors and visit stress",
          items: [
            "搭車、進出運輸籠或抵達獸醫院時，出現明顯焦慮或抗拒。",
            "候診室中的氣味、聲音、人或動物讓狗狗難以保持平靜。",
            "進入診間、上診療台或被固定時，壓力反應明顯升高。",
            "日常出現排泄失誤、標記、舔咬身體、轉圈或其他重複行為。",
            "出現吞食異物、偷食、翻垃圾或其他安全相關行為。",
            "睡眠、食慾、排泄或互動模式近期有明顯變化。",
          ],
        },
      ],
      overall: {
        title: "低壓力就診需求評估",
        prompt:
          "綜合以上表現，您認為這隻狗目前在就診、檢查或照護操作中需要多少低壓力協助？",
        min: 1,
        max: 10,
        low: "幾乎不需要額外協助",
        high: "非常需要預先規劃",
      },
      notesPrompt:
        "可記錄最常出現問題的情境、誘發因素、已嘗試的處理方式、成功的安撫方法、零食偏好、PVPs 或其他藥物反應。",
      source:
        "資料來源：Hsu Y, Serpell JA. Development and validation of a questionnaire for measuring behavior and temperament traits in pet dogs. J Am Vet Med Assoc. 2003;223(9):1293-1300. https://doi.org/10.2460/javma.2003.223.1293；Wilkins V, Evans J, Park C, et al. Validation of the shortened version of the Canine Behavioral Assessment and Research Questionnaire (C-BARQ) using participants from the Dog Aging Project. PLOS ONE. 2024;19(4):e0299973. https://doi.org/10.1371/journal.pone.0299973；本頁為文獻架構參考之篩檢/追蹤工具，非官方 C-BARQ 題本。",
    },
  {
      id: "short-cbarq",
      shortTitle: "犬短版 C-BARQ(S)",
      navTitle: "犬短版行為篩檢",
      navRef: "C-BARQ(S)",
      title: "犬短版行為篩檢 (C-BARQ(S) / mini C-BARQ 架構參考版)",
      subtitle: "42 題，適合快速完成的犬行為與就診壓力記錄",
      intro:
        "請依狗狗最近一段時間在相似情境中的常見反應作答。0 分代表未觀察到、不適用或完全沒有；4 分代表反應明顯、頻繁或強烈。",
      notice:
        "2024 外部驗證研究描述 C-BARQ(S) 為 42 題短版，通常 10 分鐘內可完成。本頁採同樣的短版架構概念，整理為院內快速篩檢版，非官方題本逐字重製。",
      interpretationMode: "tracking-only",
      direction: "lower",
      totalLabel: "行為關注總分",
      qualityLabel: "行為穩定指標",
      scale: {
        min: 0,
        max: 4,
        labels: {
          0: "未觀察到 / 不適用 / 完全沒有",
          1: "輕微或偶爾",
          2: "中等或有時",
          3: "明顯或經常",
          4: "非常明顯或幾乎每次",
        },
      },
      categories: [
        {
          name: "陌生人相關攻擊",
          english: "Stranger-directed aggression",
          items: [
            "陌生人靠近、注視、伸手或進入家中時，出現威嚇、撲衝或攻擊反應。",
            "外出牽繩時遇到陌生人靠近，反應升高到難以轉移。",
            "陌生兒童跑動、尖叫或伸手互動時，出現防禦或攻擊表現。",
          ],
        },
        {
          name: "家人相關攻擊",
          english: "Owner-directed aggression",
          items: [
            "家人拿取食物、玩具、睡處或重要資源時，出現護資源反應。",
            "家人要求移動、停止行為或配合照護時，出現低吼、齜牙或咬人威脅。",
          ],
        },
        {
          name: "陌生人恐懼",
          english: "Stranger-directed fear",
          items: [
            "陌生人靠近或伸手時，出現退縮、發抖、夾尾、躲藏或想逃走。",
            "家中有訪客或戶外遇到陌生人時，需要很久才能恢復平靜。",
            "在公共場所被人注意或靠近時，明顯不安或拒絕前進。",
          ],
        },
        {
          name: "非社交恐懼",
          english: "Nonsocial fear",
          items: [
            "對雷聲、煙火、施工、車聲或突然聲響有明顯害怕反應。",
            "對陌生物件、地面材質、電梯、樓梯或設備明顯抗拒。",
            "環境改變或新物品出現後，需要很久才敢探索。",
          ],
        },
        {
          name: "其他犬相關攻擊",
          english: "Dog-directed aggression",
          items: [
            "看到或接近陌生犬時，出現吠叫、低吼、撲衝或攻擊姿態。",
            "與其他犬共享空間、資源或照顧者注意力時，容易發生衝突。",
            "牽繩或空間受限時，對其他犬的反應明顯加劇。",
          ],
        },
        {
          name: "其他犬恐懼",
          english: "Dog-directed fear",
          items: [
            "陌生犬靠近、嗅聞或吠叫時，出現躲避、僵住、夾尾或求助。",
            "在獸醫院、寵物店、公園或訓練環境遇到其他犬時，明顯緊張。",
          ],
        },
        {
          name: "同住犬競爭",
          english: "Dog rivalry",
          items: [
            "與同住犬爭奪食物、床位、玩具、門口或照顧者注意力。",
            "同住犬靠近資源或人時，出現阻擋、威嚇、追逐或攻擊。",
          ],
        },
        {
          name: "分離相關行為",
          english: "Separation-related behavior",
          items: [
            "被單獨留在家中或與主要照顧者分開時，出現持續吠叫、哀鳴或嚎叫。",
            "分離時破壞門窗、家具、籠具或試圖逃脫。",
            "照顧者準備外出或離開視線時，提前出現焦慮、喘氣、踱步或黏著。",
          ],
        },
        {
          name: "依附與注意力尋求",
          english: "Attachment and attention-seeking",
          items: [
            "在家中長時間跟隨照顧者，難以獨自休息。",
            "照顧者與他人或其他動物互動時，會硬擠到中間、擋住對方，或一直要求關注。",
          ],
        },
        {
          name: "訓練與回應困難",
          english: "Trainability challenges",
          items: [
            "在有刺激或干擾時，難以回應已學會的指令、喚回或等待。",
            "需要多次提示才願意放開物品、停止行為或轉移注意力。",
            "新規則、照護步驟或路線改變需要很長時間才能適應。",
          ],
        },
        {
          name: "追逐",
          english: "Chasing",
          items: [
            "看到貓、鳥、小動物、車輛、腳踏車或跑動的人時，會突然追逐。",
            "追逐開始後，很難用呼喚、食物或牽繩提示中斷。",
          ],
        },
        {
          name: "興奮度",
          english: "Excitability",
          items: [
            "準備散步、搭車、玩耍、開門或迎接人時，興奮到難以控制。",
            "遇到門鈴、訪客、外界聲音或預期事件時，反應快速升高。",
            "興奮後需要很久才能恢復平靜。",
          ],
        },
        {
          name: "觸碰敏感",
          english: "Touch sensitivity",
          items: [
            "觸碰腳、耳朵、嘴巴、尾巴、腹部或疼痛區域時，出現明顯拒絕或威脅。",
            "剪指甲、清耳朵、刷牙、洗澡、擦藥或戴口罩時，壓力反應明顯。",
            "獸醫檢查、量體溫、抽血或固定時，很難安全配合。",
          ],
        },
        {
          name: "活動量",
          english: "Energy level",
          items: [
            "日常活動量、探索或尋求刺激的程度高到影響居家安定。",
            "活動不足時容易出現破壞、吠叫、煩躁或過度要求互動。",
          ],
        },
        {
          name: "其他行為與就診壓力",
          english: "Miscellaneous behaviors and visit stress",
          items: [
            "搭車、運輸籠、進出醫院或候診室時，出現明顯焦慮或抗拒。",
            "診間觸診、固定、抽血、打針或檢查時，壓力反應明顯升高。",
            "在家中出現排泄失誤、標記、吞食異物、翻垃圾或安全相關行為。",
            "出現舔咬身體、轉圈、追尾、過度理毛或其他重複行為。",
            "近期睡眠、食慾、排泄、互動或活動模式有明顯改變。",
            "疼痛、皮膚、腸胃、泌尿、神經或內分泌問題可能影響行為。",
          ],
        },
      ],
      overall: {
        title: "低壓力就診需求評估",
        prompt:
          "綜合以上表現，您認為這隻狗目前在就診、檢查或照護操作中需要多少低壓力協助？",
        min: 1,
        max: 10,
        low: "幾乎不需要額外協助",
        high: "非常需要預先規劃",
      },
      notesPrompt:
        "可記錄最主要的三個問題情境、已成功的處理方式、喜歡的獎勵、運輸方式、到院前用藥與需要避免的操作。",
      source:
        "資料來源：Duffy DL, Kruger KA, Serpell JA. Evaluation of a behavioral assessment tool for dogs relinquished to shelters. Preventive Veterinary Medicine. 2014;117(3-4):601-609；Wilkins V, Evans J, Park C, et al. Validation of the shortened version of the Canine Behavioral Assessment and Research Questionnaire (C-BARQ) using participants from the Dog Aging Project. PLOS ONE. 2024;19(4):e0299973. https://doi.org/10.1371/journal.pone.0299973；本頁為短版架構參考之快速篩檢/追蹤工具，非官方 C-BARQ(S) 題本。",
    },
  {
      id: "fe-barq",
      shortTitle: "貓 Fe-BARQ 架構版",
      navTitle: "貓行為篩檢",
      navRef: "Fe-BARQ",
      title: "貓行為與就診壓力篩檢 (Fe-BARQ 架構參考版)",
      subtitle: "依貓行為因素與 miscellaneous behaviors 整理的臨床記錄工具",
      intro:
        "請依貓咪最近一段時間在日常生活、陌生人、同住動物、觸碰、運輸、就診與環境變化下的常見反應作答。0 分代表未觀察到、不適用或完全沒有；4 分代表反應明顯、頻繁或強烈。",
      notice:
        "本頁依 Fe-BARQ 文獻與公開說明整理為院內篩檢/追蹤版，並非官方 Fe-BARQ 題本逐字重製。結果適合協助問診、低壓力就診計畫與環境調整，不作為單獨診斷。",
      interpretationMode: "tracking-only",
      direction: "lower",
      totalLabel: "行為關注總分",
      qualityLabel: "行為穩定指標",
      scale: {
        min: 0,
        max: 4,
        labels: {
          0: "未觀察到 / 不適用 / 完全沒有",
          1: "輕微或偶爾",
          2: "中等或有時",
          3: "明顯或經常",
          4: "非常明顯或幾乎每次",
        },
      },
      categories: [
        {
          name: "陌生人恐懼",
          english: "Stranger fear",
          items: [
            "陌生人進入家中或靠近時，出現躲藏、僵住、逃跑或瞳孔放大。",
            "陌生人伸手、注視或試圖互動時，壓力反應明顯升高。",
          ],
        },
        {
          name: "陌生人相關攻擊",
          english: "Stranger-directed aggression",
          items: [
            "陌生人靠近、伸手或阻擋路徑時，出現哈氣、低吼、拍打或咬人。",
            "訪客在家中移動或停留時，貓咪持續警戒或主動驅離。",
          ],
        },
        {
          name: "照顧者相關攻擊",
          english: "Owner-directed aggression",
          items: [
            "照顧者撫摸、抱起、移動或中止互動時，出現抓咬、哈氣或低吼。",
            "照顧者拿取食物、玩具、休息處或靠近貓砂盆時，出現護資源反應。",
          ],
        },
        {
          name: "撫摸敏感",
          english: "Petting sensitivity",
          items: [
            "原本接受撫摸後突然翻臉、甩尾、轉頭咬或拍打。",
            "觸碰腹部、腳、尾巴、耳朵或疼痛區域時，反應明顯升高。",
          ],
        },
        {
          name: "處理與醫療操作敏感",
          english: "Handling sensitivity",
          items: [
            "剪指甲、梳毛、清耳、刷牙、點藥、餵藥或戴項圈時，明顯抗拒。",
            "獸醫觸診、固定、量體溫、抽血或注射時，壓力或防禦反應明顯。",
          ],
        },
        {
          name: "運輸籠與搭車壓力",
          english: "Carrier and travel stress",
          items: [
            "看到運輸籠、被引導進籠或籠門關閉時，出現逃避或防禦反應。",
            "搭車或抵達醫院時，出現喘、流口水、叫、排泄或僵住。",
          ],
        },
        {
          name: "就診環境壓力",
          english: "Veterinary visit stress",
          items: [
            "候診室的聲音、氣味、人或動物讓貓咪難以保持安定。",
            "進入診間、離開運輸籠或被放上診療台時，壓力反應明顯。",
          ],
        },
        {
          name: "新奇事物恐懼",
          english: "Novelty fear",
          items: [
            "家具、氣味、聲音、訪客物品或家中擺設改變後，長時間躲藏或不探索。",
            "面對新玩具、新食器、新貓砂或新路徑時，明顯猶豫或拒絕接近。",
          ],
        },
        {
          name: "環境變化適應",
          english: "Environmental change",
          items: [
            "搬家、裝修、家中成員改變或作息改變後，食慾、排泄或互動受影響。",
            "貓砂盆、食水位置、休息點或垂直空間變動後，出現明顯壓力反應。",
          ],
        },
        {
          name: "同住貓攻擊",
          english: "Familiar cat aggression",
          items: [
            "對同住貓出現追逐、堵路、瞪視、哈氣、拍打或咬抓。",
            "食物、貓砂盆、休息點、窗邊或照顧者注意力引發貓間衝突。",
          ],
        },
        {
          name: "同住貓恐懼",
          english: "Familiar cat fear",
          items: [
            "同住貓靠近或經過時，出現退縮、躲藏、繞路或不敢使用資源。",
            "因同住貓壓力而減少進食、喝水、上廁所或活動。",
          ],
        },
        {
          name: "陌生貓或戶外貓反應",
          english: "Unfamiliar cat response",
          items: [
            "看到窗外、門外或院子裡的陌生貓時，出現激動、攻擊或恐懼。",
            "陌生貓出現後，家中標記、貓間衝突或警戒行為增加。",
          ],
        },
        {
          name: "犬或其他動物反應",
          english: "Dog and other animal response",
          items: [
            "看到犬或其他動物時，出現躲藏、僵住、逃跑或防禦攻擊。",
            "同住犬靠近、嗅聞、追逐或分享空間時，貓咪壓力明顯。",
          ],
        },
        {
          name: "人際親和與退縮",
          english: "Sociability and withdrawal",
          items: [
            "平常與照顧者互動減少，較常躲藏或不願接觸。",
            "對日常呼喚、陪伴、遊戲或撫摸的興趣明顯下降。",
          ],
        },
        {
          name: "依附與注意力尋求",
          english: "Attachment and attention-seeking",
          items: [
            "過度跟隨照顧者、要求陪伴，或照顧者離開視線後焦慮。",
            "需要注意時會持續叫、拍門、抓人、阻擋工作或打斷睡眠。",
          ],
        },
        {
          name: "遊戲與活動調節",
          english: "Play and activity regulation",
          items: [
            "玩耍時容易過度興奮、抓咬人手腳，或很難停止。",
            "日常活動量過高或過低，已影響睡眠、互動或居家安排。",
          ],
        },
        {
          name: "掠捕與追逐",
          english: "Predatory and chasing behavior",
          items: [
            "對鳥、昆蟲、小動物、腳步、掃把、衣物或快速移動物強烈追逐。",
            "追逐或撲抓行為造成家人受傷、同住動物壓力或安全疑慮。",
          ],
        },
        {
          name: "發聲",
          english: "Vocalization",
          items: [
            "夜間、清晨、分離、關門或要求資源時，出現持續叫聲。",
            "叫聲頻率、音量或發生情境近期明顯增加。",
          ],
        },
        {
          name: "排泄與貓砂盆",
          english: "Elimination and litter box",
          items: [
            "在貓砂盆外排尿、排便，或進出貓砂盆時猶豫、叫、快速逃離。",
            "貓砂盆位置、砂材、清潔頻率、同住貓或疼痛可能影響排泄行為。",
          ],
        },
        {
          name: "尿液標記",
          english: "Urine marking",
          items: [
            "在牆面、家具、門窗、窗簾或垂直表面噴尿或標記。",
            "標記行為與陌生貓、家中變化、壓力或多貓資源競爭相關。",
          ],
        },
        {
          name: "抓撓與破壞",
          english: "Scratching and destructiveness",
          items: [
            "抓家具、門框、地毯、窗簾或其他不適當位置，且難以轉移。",
            "咬塑膠、電線、紙箱、植物或其他可能造成危險的物品。",
          ],
        },
        {
          name: "理毛與重複行為",
          english: "Grooming and repetitive behavior",
          items: [
            "過度舔毛、拔毛、啃咬身體或出現局部掉毛。",
            "轉圈、追尾、吸吮、啃布或其他重複行為影響日常生活。",
          ],
        },
        {
          name: "食慾與攝食行為",
          english: "Feeding behavior",
          items: [
            "食慾、食物偏好、進食速度或討食行為近期明顯改變。",
            "多貓家庭中，因壓力或資源競爭而不敢進食或過度搶食。",
          ],
        },
        {
          name: "其他行為與健康線索",
          english: "Miscellaneous behaviors and health clues",
          items: [
            "睡眠週期、夜間活動、躲藏地點或日常路線近期明顯改變。",
            "疑似疼痛、皮膚搔癢、口腔不適、泌尿、腸胃、內分泌或神經問題影響行為。",
            "PVPs、止痛、抗焦慮、鎮靜或其他藥物使用後，行為仍需追蹤。",
            "家中可用垂直空間、躲藏點、貓砂盆、食水站或刮抓資源不足。",
          ],
        },
      ],
      overall: {
        title: "低壓力就診需求評估",
        prompt:
          "綜合以上表現，您認為這隻貓目前在運輸、候診、檢查或照護操作中需要多少低壓力協助？",
        min: 1,
        max: 10,
        low: "幾乎不需要額外協助",
        high: "非常需要預先規劃",
      },
      notesPrompt:
        "可記錄最主要的壓力情境、貓咪喜歡的獎勵、運輸籠訓練狀態、到院前用藥、同住動物關係、砂盆/資源配置與需要避免的操作。",
      source:
        "資料來源：Duffy DL, de Moura RTD, Serpell JA. Development and evaluation of the Fe-BARQ: A new survey instrument for measuring behavior in domestic cats (Felis s. catus). Behavioural Processes. 2017;141:329-341. https://doi.org/10.1016/j.beproc.2017.02.010；本頁為 Fe-BARQ 文獻架構參考之篩檢/追蹤工具，非官方 Fe-BARQ 題本。",
    }
];

const STORAGE_KEY = "gaze-pet-behavior-state-v1";
const PRODUCTION_ORIGIN = "https://pet-behavior-screening.vercel.app";
const app = document.querySelector("#app");
const assessmentById = new Map(ASSESSMENTS.map((assessment) => [assessment.id, assessment]));
let panelStatus = "";
let panelStatusKind = "success";
let lastQrTrigger = null;
let lastSubmissionTrigger = null;
let uploadInProgress = false;

const state = loadState();
state.activeId = getInitialAssessmentId();

window.addEventListener("popstate", () => {
  state.activeId = getInitialAssessmentId();
  render();
});

app.addEventListener("click", async (event) => {
  const routeLink = event.target.closest("[data-route]");
  if (routeLink) {
    event.preventDefault();
    setActiveAssessment(routeLink.dataset.route);
    return;
  }

  const action = event.target.closest("[data-action]")?.dataset.action;
  if (!action) return;

  if (action === "print") {
    window.print();
  }

  if (action === "reset") {
    const active = getActiveAssessment();
    if (window.confirm(`確定要清除「${active.shortTitle}」目前填寫內容嗎？`)) {
      clearActiveAssessment();
    }
  }

  if (action === "copy-summary") {
    await copyText(buildSummaryText());
  }

  if (action === "copy-link") {
    await copyText(window.location.href);
  }

  if (action === "open-qr-modal") {
    lastQrTrigger = event.target.closest("[data-action]");
    openQrModal(lastQrTrigger.dataset.qrUrl, lastQrTrigger.dataset.qrTitle);
  }

  if (action === "upload-firebase") {
    lastSubmissionTrigger = event.target.closest("[data-action]");
    await uploadActiveRecord();
  }
});

document.addEventListener("click", (event) => {
  if (event.target.closest("[data-modal-action='close-qr']")) {
    closeQrModal();
  }

  if (event.target.closest("[data-modal-action='close-submission']")) {
    closeSubmissionModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (document.querySelector(".submission-modal")) {
    closeSubmissionModal();
    return;
  }
  closeQrModal();
});

app.addEventListener("change", (event) => {
  const target = event.target;
  if (target.matches("[data-answer]")) {
    const assessmentId = target.dataset.assessment;
    const itemId = target.dataset.item;
    ensureAssessmentState(assessmentId);
    state.answers[assessmentId][itemId] = Number(target.value);
    saveState();
    renderScorePanel();
    renderProgress();
  }

  if (target.matches("[data-overall]")) {
    const assessmentId = target.dataset.assessment;
    state.overall[assessmentId] = Number(target.value);
    saveState();
    renderScorePanel();
  }

  if (target.matches("[data-meta-check]")) {
    const assessmentId = target.dataset.assessment;
    ensureMetaState(assessmentId);
    state.meta[assessmentId][target.dataset.metaCheck] = target.checked;
    saveState();
    if (target.dataset.metaCheck === "externalUser") {
      syncPatientDigitsRequirement(assessmentId);
    }
  }
});

app.addEventListener("input", (event) => {
  const target = event.target;
  const assessmentId = target.dataset.assessment;
  if (!assessmentId) return;

  if (target.matches("[data-notes]")) {
    state.notes[assessmentId] = target.value;
    saveState();
  }

  if (target.matches("[data-meta]")) {
    ensureMetaState(assessmentId);
    if (target.dataset.meta === "patientDigits") {
      target.value = normalizePatientDigits(target.value);
    }
    state.meta[assessmentId][target.dataset.meta] = target.value;
    saveState();
  }
});

render();

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return {
      activeId: ASSESSMENTS[0].id,
      answers: saved.answers || {},
      notes: saved.notes || {},
      meta: saved.meta || {},
      overall: saved.overall || {},
    };
  } catch {
    return {
      activeId: ASSESSMENTS[0].id,
      answers: {},
      notes: {},
      meta: {},
      overall: {},
    };
  }
}

function saveState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      answers: state.answers,
      notes: state.notes,
      meta: state.meta,
      overall: state.overall,
    })
  );
}

function getInitialAssessmentId() {
  const path = window.location.pathname.replace(/^\/+|\/+$/g, "");
  if (assessmentById.has(path)) return path;
  return state.activeId && assessmentById.has(state.activeId)
    ? state.activeId
    : ASSESSMENTS[0].id;
}

function getActiveAssessment() {
  return assessmentById.get(state.activeId) || ASSESSMENTS[0];
}

function setActiveAssessment(id) {
  if (!assessmentById.has(id)) return;
  state.activeId = id;
  const nextPath = `/${id}`;
  if (window.location.pathname !== nextPath) {
    history.pushState({}, "", nextPath);
  }
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function ensureAssessmentState(assessmentId) {
  if (!state.answers[assessmentId]) state.answers[assessmentId] = {};
}

function ensureMetaState(assessmentId) {
  if (!state.meta[assessmentId]) state.meta[assessmentId] = {};
}

function clearActiveAssessment() {
  const id = state.activeId;
  delete state.answers[id];
  delete state.notes[id];
  delete state.meta[id];
  delete state.overall[id];
  saveState();
  render();
}

function render() {
  const active = getActiveAssessment();
  document.title = `${active.shortTitle} | ${SITE_TITLE}`;
  ensureAssessmentState(active.id);
  ensureMetaState(active.id);

  app.innerHTML = `
    <header class="site-header">
      <div class="header-inner">
        <img class="brand-art" src="/assets/pet-qol-illustration.png" alt="" />
        <div>
          <h1 class="site-title">${escapeHtml(SITE_TITLE)}</h1>
          <p class="site-subtitle">${escapeHtml(SITE_SUBTITLE)}</p>
        </div>
      </div>
    </header>
    <div class="tabs-wrap">
      <nav class="tabs" aria-label="量表選擇">
        ${ASSESSMENTS.map(
          (assessment) => `
            <a class="tab-link" href="/${assessment.id}" data-route="${assessment.id}" title="${escapeAttribute(
            `${assessment.navTitle} (${assessment.navRef})`
          )}" ${
            assessment.id === active.id ? 'aria-current="page"' : ""
          }>
              <span class="tab-title">${escapeHtml(assessment.navTitle)}</span>
              <span class="tab-ref">${escapeHtml(assessment.navRef)}</span>
            </a>
          `
        ).join("")}
      </nav>
    </div>
    <div class="layout">
      <main class="assessment-main">
        ${renderAssessment(active)}
      </main>
      <aside class="score-panel" id="score-panel" aria-live="polite"></aside>
    </div>
  `;

  renderScorePanel();
  renderProgress();
}

function renderAssessment(assessment) {
  const meta = state.meta[assessment.id] || {};
  const today = new Date().toISOString().slice(0, 10);
  const patientDigitsRequired = !meta.externalUser;
  const scaleGuideHtml = renderScaleGuide(assessment);
  return `
    <section class="assessment-head" aria-labelledby="assessment-title">
      <h2 id="assessment-title" class="assessment-title">${escapeHtml(assessment.title)}</h2>
      <p class="assessment-subtitle">${escapeHtml(assessment.subtitle)}</p>
      <p class="intro">${escapeHtml(assessment.intro)}</p>
      <p class="notice">此工具用於居家觀察、追蹤與就診討論，不取代獸醫師診斷或治療建議。資料會先保存在目前裝置的瀏覽器；只有按下「上傳紀錄」時，才會送到凝視犬貓專科醫院的紀錄系統。</p>
      ${assessment.notice ? `<p class="notice secondary-notice">${escapeHtml(assessment.notice)}</p>` : ""}
      ${renderQrShareBlock(assessment)}
      ${scaleGuideHtml ? `<div class="scale-guide" aria-label="分數說明">${scaleGuideHtml}</div>` : ""}
      <div class="meta-grid">
        <label class="field-label">
          <span>寵物姓名或代號 <span class="required-mark">必填</span></span>
          <input class="text-field" type="text" data-meta="petName" data-assessment="${assessment.id}" value="${escapeAttribute(
            meta.petName || ""
          )}" placeholder="請填寫寵物姓名或代號" required aria-required="true" />
        </label>
        <label class="field-label">
          <span>
            四院共用病歷號碼後五碼
            <span class="required-mark ${patientDigitsRequired ? "" : "conditional-mark"}" data-patient-required-label="${assessment.id}">
              ${patientDigitsRequired ? "必填" : "非四院可免填"}
            </span>
          </span>
          <span class="patient-input-wrap">
            <span class="patient-prefix" aria-hidden="true">PT0</span>
            <input
              class="text-field patient-digits"
              type="text"
              inputmode="numeric"
              autocomplete="off"
              maxlength="5"
              pattern="[0-9]{5}"
              data-meta="patientDigits"
              data-assessment="${assessment.id}"
              value="${escapeAttribute(meta.patientDigits || "")}"
              placeholder="12345"
              aria-label="四院共用病歷號碼後五碼"
              title="請輸入 5 碼數字"
              ${patientDigitsRequired ? 'required aria-required="true"' : 'aria-required="false"'}
            />
          </span>
        </label>
        <label class="field-label">
          填寫日期
          <input class="text-field" type="date" data-meta="date" data-assessment="${assessment.id}" value="${escapeAttribute(
            meta.date || today
          )}" />
        </label>
        <label class="checkbox-field">
          <input
            type="checkbox"
            data-meta-check="externalUser"
            data-assessment="${assessment.id}"
            ${meta.externalUser ? "checked" : ""}
          />
          <span>
            <strong>非四院共用病歷病例，僅使用公開工具。</strong>
            <small>四院包含吉米哈利動物醫院、凝視犬貓專科醫院、狗意思犬專科醫院、凱特森貓專科醫院。</small>
          </span>
        </label>
      </div>
      <div class="progress-block" id="progress-block"></div>
      <div class="result-ranges-block" id="result-ranges-block"></div>
    </section>
    ${renderQuestionSections(assessment)}
    ${assessment.overall ? renderOverallBlock(assessment) : ""}
    ${renderNotesBlock(assessment)}
    ${renderSourceBlock(assessment)}
  `;
}

function renderQrShareBlock(assessment) {
  const shareUrl = getAssessmentUrl(assessment.id);
  const localNote = isLocalPreview()
    ? `<p class="qr-note">目前是本機預覽網址；正式上線後，QR Code 會自動改成公開網址。</p>`
    : "";

  return `
    <div class="qr-share" aria-label="此量表 QR Code">
      <button
        class="qr-image-button"
        type="button"
        data-action="open-qr-modal"
        data-qr-url="${escapeAttribute(shareUrl)}"
        data-qr-title="${escapeAttribute(assessment.shortTitle)}"
        aria-label="放大 ${escapeAttribute(assessment.shortTitle)} QR Code"
      >
        <img
          class="qr-image"
          src="${escapeAttribute(getQrCodeUrl(shareUrl))}"
          alt=""
        />
        <span class="qr-image-hint">放大</span>
      </button>
      <div class="qr-copy">
        <h3>手機掃描填寫此量表</h3>
        <p>診間可開啟這個分頁，讓家長掃描後直接進入「${escapeHtml(assessment.shortTitle)}」。</p>
        <a class="qr-url" href="${escapeAttribute(shareUrl)}" target="_blank" rel="noopener">${escapeHtml(shareUrl)}</a>
        ${localNote}
      </div>
    </div>
  `;
}

function openQrModal(shareUrl, title) {
  closeQrModal({ restoreFocus: false });
  const modal = document.createElement("div");
  modal.className = "qr-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-labelledby", "qr-modal-title");
  modal.innerHTML = `
    <button class="qr-modal-backdrop" type="button" data-modal-action="close-qr" aria-label="關閉 QR Code"></button>
    <div class="qr-modal-card">
      <button class="qr-modal-close" type="button" data-modal-action="close-qr" aria-label="關閉">x</button>
      <h2 id="qr-modal-title">${escapeHtml(title || "此量表")} QR Code</h2>
      <img
        class="qr-modal-image"
        src="${escapeAttribute(getQrCodeUrl(shareUrl, 520))}"
        alt="掃描開啟 ${escapeAttribute(title || "此量表")}"
      />
      <a class="qr-modal-url" href="${escapeAttribute(shareUrl)}" target="_blank" rel="noopener">${escapeHtml(shareUrl)}</a>
    </div>
  `;
  document.body.appendChild(modal);
  document.body.classList.add("modal-open");
  modal.querySelector(".qr-modal-close")?.focus();
}

function closeQrModal(options = {}) {
  const { restoreFocus = true } = options;
  const modal = document.querySelector(".qr-modal");
  if (!modal) return;
  modal.remove();
  document.body.classList.remove("modal-open");
  if (restoreFocus && lastQrTrigger) lastQrTrigger.focus();
}

function openSubmissionModal({ assessment, stats, meta, recordId, googleResult, kind = "success" }) {
  closeSubmissionModal({ restoreFocus: false, force: true });
  const pdfFileName = googleResult?.pdfFileName || "";
  const hasStoredPdf = Boolean(pdfFileName);
  const isWarning = kind === "warning";
  const title = isWarning ? "紀錄已收到，PDF 匯出待確認" : "已收到這份問卷";
  const description = isWarning
    ? "問卷紀錄已送出，但院內紀錄或 PDF 歸檔暫時沒有完成。院內可依紀錄 ID 追蹤。"
    : hasStoredPdf
      ? "問卷已送出，院內也已留存 PDF 紀錄。感謝填寫，結果可作為後續追蹤與回診討論參考。"
      : "問卷已送出，感謝填寫。此結果可作為後續追蹤與回診討論參考。";

  const modal = document.createElement("div");
  modal.className = "submission-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-labelledby", "submission-modal-title");
  modal.innerHTML = `
    <button class="submission-modal-backdrop" type="button" data-modal-action="close-submission" aria-label="關閉送出確認"></button>
    <div class="submission-modal-card ${isWarning ? "warning" : ""}">
      <button class="qr-modal-close" type="button" data-modal-action="close-submission" aria-label="關閉">x</button>
      <div class="submission-icon" aria-hidden="true">${isWarning ? "!" : "✓"}</div>
      <h2 id="submission-modal-title">${escapeHtml(title)}</h2>
      <p class="submission-message">${escapeHtml(description)}</p>
      <dl class="submission-summary">
        <div>
          <dt>寵物</dt>
          <dd>${escapeHtml(meta.petName || "未填寫")}</dd>
        </div>
        <div>
          <dt>量表</dt>
          <dd>${escapeHtml(assessment.shortTitle)}</dd>
        </div>
        <div>
          <dt>填寫日期</dt>
          <dd>${escapeHtml(meta.date || "未填寫")}</dd>
        </div>
        <div>
          <dt>${escapeHtml(assessment.totalLabel)}</dt>
          <dd>${stats.total} / ${stats.max}</dd>
        </div>
        <div>
          <dt>${escapeHtml(assessment.qualityLabel)}</dt>
          <dd>${stats.qualityPercent}%</dd>
        </div>
        <div>
          <dt>完成度</dt>
          <dd>${stats.completed} / ${stats.itemCount}</dd>
        </div>
      </dl>
      <p class="submission-record-id">紀錄 ID：${escapeHtml(recordId || "已送出")}</p>
      <div class="submission-actions">
        <button class="action-button" type="button" data-modal-action="close-submission">完成</button>
      </div>
      ${hasStoredPdf ? `<p class="submission-pdf-name">PDF 已留存於院內紀錄。</p>` : ""}
    </div>
  `;
  document.body.appendChild(modal);
  document.body.classList.add("modal-open");
  modal.querySelector(".submission-actions [data-modal-action='close-submission']")?.focus();
}

function openSubmissionProgressModal({ assessment, meta }) {
  closeSubmissionModal({ restoreFocus: false, force: true });
  const modal = document.createElement("div");
  modal.className = "submission-modal";
  modal.dataset.submissionState = "loading";
  modal.setAttribute("role", "alertdialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-labelledby", "submission-modal-title");
  modal.setAttribute("aria-describedby", "submission-modal-message");
  modal.innerHTML = `
    <div class="submission-modal-backdrop" aria-hidden="true"></div>
    <div class="submission-modal-card loading" aria-live="assertive" tabindex="-1">
      <div class="submission-spinner" aria-hidden="true"></div>
      <h2 id="submission-modal-title">正在上傳紀錄</h2>
      <p class="submission-message" id="submission-modal-message">
        系統正在儲存問卷並建立院內紀錄，通常需要幾秒鐘。請不要重複點選或關閉頁面。
      </p>
      <dl class="submission-summary compact">
        <div>
          <dt>寵物</dt>
          <dd>${escapeHtml(meta.petName || "未填寫")}</dd>
        </div>
        <div>
          <dt>量表</dt>
          <dd>${escapeHtml(assessment.shortTitle)}</dd>
        </div>
        <div>
          <dt>填寫日期</dt>
          <dd>${escapeHtml(meta.date || "未填寫")}</dd>
        </div>
      </dl>
    </div>
  `;
  document.body.appendChild(modal);
  document.body.classList.add("modal-open");
  modal.querySelector(".submission-modal-card")?.focus();
}

function openSubmissionFailureModal(message) {
  closeSubmissionModal({ restoreFocus: false, force: true });
  const modal = document.createElement("div");
  modal.className = "submission-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-labelledby", "submission-modal-title");
  modal.innerHTML = `
    <button class="submission-modal-backdrop" type="button" data-modal-action="close-submission" aria-label="關閉上傳失敗提示"></button>
    <div class="submission-modal-card warning">
      <button class="qr-modal-close" type="button" data-modal-action="close-submission" aria-label="關閉">x</button>
      <div class="submission-icon" aria-hidden="true">!</div>
      <h2 id="submission-modal-title">上傳失敗</h2>
      <p class="submission-message">${escapeHtml(message)}</p>
      <div class="submission-actions">
        <button class="action-button" type="button" data-modal-action="close-submission">我知道了</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  document.body.classList.add("modal-open");
  modal.querySelector(".submission-actions [data-modal-action='close-submission']")?.focus();
}

function closeSubmissionModal(options = {}) {
  const { restoreFocus = true, force = false } = options;
  const modal = document.querySelector(".submission-modal");
  if (!modal) return;
  if (modal.dataset.submissionState === "loading" && !force) return;
  modal.remove();
  document.body.classList.remove("modal-open");
  if (restoreFocus && lastSubmissionTrigger) lastSubmissionTrigger.focus();
}

function renderScaleGuide(assessment) {
  const guides = getGeneralScaleGuides(assessment);
  if (!guides.length) return "";

  return guides
    .map((guide) => {
      return renderScaleGuideGroup(assessment, guide);
    })
    .join("");
}

function renderQuestionSections(assessment) {
  let itemNumber = 1;
  const questionGuides = getQuestionScaleGuides(assessment);
  return assessment.categories
    .map((category, categoryIndex) => {
      const questions = category.items
        .map((rawItem) => {
          const item = normalizeItem(rawItem);
          const itemId = `${categoryIndex}-${itemNumber}`;
          const guideHtml = renderQuestionGuideBefore(assessment, questionGuides, itemNumber);
          const html = `${guideHtml}${renderQuestionCard(
            assessment,
            category,
            item,
            itemNumber,
            itemId
          )}`;
          itemNumber += 1;
          return html;
        })
        .join("");

      return `
        <section class="category-section" aria-labelledby="category-${categoryIndex}">
          <h3 class="category-title" id="category-${categoryIndex}">
            <span>${escapeHtml(category.name)}</span>
            <span class="category-en">${escapeHtml(category.english)}</span>
          </h3>
          <div class="question-list">
            ${questions}
          </div>
        </section>
      `;
    })
    .join("");
}

function renderScaleGuideGroup(assessment, guide, extraClass = "") {
  const scale = guide.scale || {
    ...assessment.scale,
    labels: guide.labels || assessment.scale.labels,
  };
  return `
    <div class="scale-guide-group ${extraClass}">
      ${guide.title ? `<h3>${escapeHtml(guide.title)}</h3>` : ""}
      <div class="scale-guide-items">
        ${getScaleValues(scale)
          .map(
            (value) => `
              <div class="scale-item">
                ${value} 分：${escapeHtml(scale.labels[value])}
              </div>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function getGeneralScaleGuides(assessment) {
  const guides = assessment.scaleGuides || [
    { title: "", labels: assessment.scale.labels, scale: assessment.scale },
  ];
  return guides.filter((guide) => !getGuideStartQuestion(guide));
}

function getQuestionScaleGuides(assessment) {
  return (assessment.scaleGuides || [])
    .map((guide) => ({
      ...guide,
      startQuestion: getGuideStartQuestion(guide),
    }))
    .filter((guide) => guide.startQuestion);
}

function getGuideStartQuestion(guide) {
  const match = String(guide.title || "").match(/^第\s*(\d+)/);
  return match ? Number(match[1]) : null;
}

function renderQuestionGuideBefore(assessment, guides, itemNumber) {
  return guides
    .filter((guide) => guide.startQuestion === itemNumber)
    .map((guide) => renderScaleGuideGroup(assessment, guide, "question-scale-guide"))
    .join("");
}

function renderQuestionCard(assessment, category, item, number, itemId) {
  const answer = state.answers[assessment.id]?.[itemId];
  const scale = item.scale || category.scale || assessment.scale;
  return `
    <article class="question-card ${item.reverse ? "reverse" : ""}">
      <div class="question-copy">
        <span class="question-number">${number}.</span>
        <div>
          <p class="question-text">${escapeHtml(item.text)}</p>
          ${renderQuestionScaleHint(scale, item)}
          ${
            item.reverse
              ? `<p class="reverse-note">負向題：${scale.min} 代表負面狀態明顯，${scale.max} 代表負面狀態不明顯。</p>`
              : ""
          }
          ${
            item.weight && item.weight !== 1
              ? `<p class="reverse-note">本題計分會乘以 ${item.weight}。</p>`
              : ""
          }
        </div>
      </div>
      <fieldset class="score-options">
        <legend class="sr-only">第 ${number} 題分數</legend>
        ${getScaleValues(scale)
          .map((value) =>
            renderScoreOption({
              assessment,
              scale,
              itemId,
              value,
              checked: answer === value,
              reverse: item.reverse,
              name: `${assessment.id}-${itemId}`,
              dataAttr: "data-answer",
              ariaLabel: `第 ${number} 題 ${value} 分：${scoreLabelFor(scale, item, value)}`,
            })
          )
          .join("")}
      </fieldset>
    </article>
  `;
}

function renderQuestionScaleHint(scale, item) {
  const min = getScaleMin(scale);
  const max = getScaleMax(scale);
  return `
    <p class="question-scale-hint">
      <span>${min} 分：${escapeHtml(scoreLabelFor(scale, item, min))}</span>
      <span>${max} 分：${escapeHtml(scoreLabelFor(scale, item, max))}</span>
    </p>
  `;
}

function renderOverallBlock(assessment) {
  const overall = assessment.overall;
  const value = state.overall[assessment.id];
  return `
    <section class="overall-block" aria-labelledby="overall-heading">
      <h3 class="section-heading" id="overall-heading">${escapeHtml(overall.title)}</h3>
      <p class="section-copy">${escapeHtml(overall.prompt)}</p>
      <div class="overall-scale">
        <div class="overall-endpoints" aria-hidden="true">
          <span class="overall-endpoint">${escapeHtml(overall.low)}</span>
          <span class="overall-endpoint">${escapeHtml(overall.high)}</span>
        </div>
        <fieldset class="score-options overall-score-options">
          <legend class="sr-only">${escapeHtml(overall.title)}</legend>
          ${range(overall.min, overall.max)
            .map((score) =>
              renderScoreOption({
                assessment,
                itemId: "overall",
                value: score,
                checked: value === score,
                reverse: false,
                name: `${assessment.id}-overall`,
                dataAttr: "data-overall",
                ariaLabel: `${overall.title} ${score} 分`,
              })
            )
            .join("")}
        </fieldset>
      </div>
    </section>
  `;
}

function renderNotesBlock(assessment) {
  return `
    <section class="notes-block" aria-labelledby="notes-heading">
      <h3 class="section-heading" id="notes-heading">備註 / 近期特殊狀況</h3>
      <p class="section-copy">${escapeHtml(assessment.notesPrompt)}</p>
      <textarea class="notes-area" data-notes data-assessment="${assessment.id}" placeholder="選填">${escapeHtml(
    state.notes[assessment.id] || ""
  )}</textarea>
    </section>
  `;
}

function renderSourceBlock(assessment) {
  const sources = assessment.source.split("；");
  return `
    <section class="source-block" aria-label="資料來源">
      ${sources.map((source) => `<p>${escapeHtml(source)}</p>`).join("")}
      <p>製作者：楊崇君。網頁整理與互動化：Codex。</p>
    </section>
  `;
}

function renderScoreOption({
  assessment,
  itemId,
  value,
  checked,
  reverse,
  name,
  dataAttr,
  ariaLabel,
}) {
  const id = `${name}-${value}`;
  return `
    <span>
      <input
        class="score-input"
        id="${escapeAttribute(id)}"
        type="radio"
        name="${escapeAttribute(name)}"
        value="${value}"
        ${dataAttr}
        data-assessment="${assessment.id}"
        data-item="${escapeAttribute(itemId)}"
        aria-label="${escapeAttribute(ariaLabel)}"
        ${checked ? "checked" : ""}
      />
      <label class="score-label ${reverse ? "reverse-label" : ""}" for="${escapeAttribute(id)}">${value}</label>
    </span>
  `;
}

function renderProgress() {
  const progressBlock = document.querySelector("#progress-block");
  if (!progressBlock) return;
  const stats = getStats(getActiveAssessment());
  progressBlock.innerHTML = `
    <div class="progress-row">
      <span>完成度</span>
      <span>${stats.completed} / ${stats.itemCount} 題</span>
    </div>
    <div class="progress-track" aria-hidden="true">
      <div class="progress-fill" style="width: ${stats.completionPercent}%"></div>
    </div>
  `;
  renderResultRanges();
}

function renderScorePanel() {
  const panel = document.querySelector("#score-panel");
  if (!panel) return;
  const assessment = getActiveAssessment();
  const stats = getStats(assessment);
  const isComplete = stats.completed === stats.itemCount;
  const maxText =
    assessment.scale.min === 0 ? `${stats.total} / ${stats.max}` : `${stats.total} / ${stats.max}`;
  panel.innerHTML = `
    <h2>即時計分</h2>
    <div class="score-stat">
      <span class="score-label-text">${escapeHtml(assessment.totalLabel)}</span>
      <span class="score-value">${maxText}</span>
    </div>
    <div class="score-stat">
      <span class="score-label-text">${escapeHtml(assessment.qualityLabel)}</span>
      <span class="score-value quality-value">${isComplete ? `${stats.qualityPercent}%` : "-"}</span>
    </div>
    <div class="score-stat">
      <span class="score-label-text">完成度</span>
      <span class="score-value">${stats.completed}/${stats.itemCount}</span>
    </div>
    ${assessment.overall ? renderOverallSummary(assessment) : ""}
    <p class="interpretation">${escapeHtml(stats.interpretation)}</p>
    <div class="category-summary">
      <h3>分類小計</h3>
      ${stats.categories
        .map(
          (category) => `
          <div class="category-line">
            <span>${escapeHtml(category.name)}</span>
            <strong>${category.completed === category.count ? category.total : "-"} / ${category.max}</strong>
          </div>
        `
        )
        .join("")}
    </div>
    <div class="action-row">
      <button class="action-button" type="button" data-action="upload-firebase" ${uploadInProgress ? 'disabled aria-busy="true"' : ""}>
        ${uploadInProgress ? "上傳中..." : "上傳紀錄"}
      </button>
      <button class="action-button" type="button" data-action="print">列印 / 儲存 PDF</button>
      <button class="action-button secondary" type="button" data-action="copy-summary">複製摘要</button>
      <button class="action-button secondary" type="button" data-action="copy-link">複製連結</button>
      <button class="action-button warning" type="button" data-action="reset">重新填寫</button>
    </div>
    <div class="copy-status ${panelStatusKind === "error" ? "error" : ""}" id="copy-status" role="status">${escapeHtml(panelStatus)}</div>
  `;
}

function renderOverallSummary(assessment) {
  const value = state.overall[assessment.id];
  return `
    <div class="score-stat">
      <span class="score-label-text">整體評分</span>
      <span class="score-value">${value ? `${value} / ${assessment.overall.max}` : "-"}</span>
    </div>
  `;
}

function renderResultRanges() {
  const block = document.querySelector("#result-ranges-block");
  if (!block) return;

  const assessment = getActiveAssessment();
  const ranges = assessment.interpretationRanges || [];
  if (!ranges.length) {
    block.innerHTML = "";
    return;
  }

  const stats = getStats(assessment);
  const isComplete = stats.completed === stats.itemCount;
  const activeRange = isComplete ? stats.interpretationRange : "";
  block.innerHTML = `
    <section class="result-ranges" aria-label="結果判讀">
      <div class="result-ranges-head">
        <h3>結果判讀</h3>
        <p>${
          isComplete
            ? `目前結果：${escapeHtml(stats.interpretationRange)} ${escapeHtml(
                stats.interpretationBand
              )}`
            : "完成所有題目後，會自動標示目前分數落在哪一個區間。"
        }</p>
      </div>
      <div class="result-range-grid">
        ${ranges
          .map((rangeItem) => {
            const rangeLabel = getInterpretationRangeLabel(rangeItem);
            const isActive = isComplete && activeRange === rangeLabel;
            return `
              <div class="result-range-card ${isActive ? "active" : ""}">
                <strong>${escapeHtml(rangeLabel)}</strong>
                <span>${escapeHtml(rangeItem.label || rangeItem.text)}</span>
              </div>
            `;
          })
          .join("")}
      </div>
      ${
        isComplete
          ? `<p class="result-interpretation">${escapeHtml(stats.interpretation)}</p>`
          : ""
      }
    </section>
  `;
}

function getStats(assessment) {
  const answers = state.answers[assessment.id] || {};
  let itemNumber = 1;
  let total = 0;
  let min = 0;
  let max = 0;
  let completed = 0;
  const categories = assessment.categories.map((category, categoryIndex) => {
    let categoryTotal = 0;
    let categoryMin = 0;
    let categoryMax = 0;
    let categoryCompleted = 0;
    const count = category.items.length;
    category.items.forEach((rawItem) => {
      const item = normalizeItem(rawItem);
      const scale = item.scale || category.scale || assessment.scale;
      const weight = item.weight || 1;
      const itemMin = getScaleMin(scale) * weight;
      const itemMax = getScaleMax(scale) * weight;
      const value = answers[`${categoryIndex}-${itemNumber}`];
      min += itemMin;
      max += itemMax;
      categoryMin += itemMin;
      categoryMax += itemMax;
      if (typeof value === "number") {
        const weightedScore = value * weight;
        completed += 1;
        categoryCompleted += 1;
        total += weightedScore;
        categoryTotal += weightedScore;
      }
      itemNumber += 1;
    });
    return {
      name: category.name,
      total: categoryTotal,
      completed: categoryCompleted,
      count,
      min: categoryMin,
      max: categoryMax,
    };
  });

  const itemCount = assessment.categories.reduce(
    (sum, category) => sum + category.items.length,
    0
  );
  const completionPercent = Math.round((completed / itemCount) * 100);
  const normalized =
    max === min ? 0 : clampPercent(Math.round(((total - min) / (max - min)) * 100));
  const qualityPercent =
    assessment.direction === "lower" ? clampPercent(100 - normalized) : normalized;
  const matchedInterpretationRange =
    completed === itemCount ? getMatchedInterpretationRange(assessment, total) : null;

  return {
    total,
    min,
    max,
    completed,
    itemCount,
    completionPercent,
    qualityPercent,
    categories,
    interpretationRange: matchedInterpretationRange
      ? getInterpretationRangeLabel(matchedInterpretationRange)
      : "",
    interpretationBand: matchedInterpretationRange?.label || "",
    interpretation: getInterpretation(
      assessment,
      completed,
      itemCount,
      qualityPercent,
      total,
      matchedInterpretationRange
    ),
  };
}

function getInterpretation(assessment, completed, itemCount, qualityPercent, total, matchedRange) {
  if (completed < itemCount) {
    return `尚有 ${itemCount - completed} 題未填，完成後會顯示較完整的解讀。`;
  }

  if (matchedRange) return matchedRange.text;

  if (assessment.interpretationMode === "tracking-only") {
    return "已完成填答。請優先查看分類小計與備註，找出需要行為諮詢、就診動線、觸碰訓練或 PVPs 調整的情境；此分數適合追蹤同一動物在不同時間的變化，不代表診斷或嚴重度切點。";
  }

  if (qualityPercent >= 80) {
    return "目前填答顯示生活品質指標相對穩定，可持續追蹤變化。";
  }

  if (qualityPercent >= 60) {
    return "目前填答顯示有部分面向需要留意，建議與既有病況、用藥與近期變化一起觀察。";
  }

  if (assessment.direction === "lower") {
    return "目前填答顯示疾病影響偏高，建議整理結果並與獸醫師討論是否需要調整照護或治療。";
  }

  return "目前填答顯示生活品質指標偏低，建議整理結果並與獸醫師討論疼痛、食慾、活動或安寧照護需求。";
}

function getMatchedInterpretationRange(assessment, total) {
  return assessment.interpretationRanges?.find((rangeItem) => {
    const aboveMin = rangeItem.min === undefined || total >= rangeItem.min;
    const belowMax = rangeItem.max === undefined || total <= rangeItem.max;
    return aboveMin && belowMax;
  });
}

function getInterpretationRangeLabel(rangeItem) {
  if (rangeItem.rangeLabel) return rangeItem.rangeLabel;
  if (rangeItem.min === undefined) return `<=${rangeItem.max}`;
  if (rangeItem.max === undefined) return `>=${rangeItem.min}`;
  return `${rangeItem.min}-${rangeItem.max}`;
}

function normalizeItem(item) {
  if (typeof item === "string") return { text: item, reverse: false };
  return {
    text: item.text,
    reverse: Boolean(item.reverse),
    weight: item.weight || 1,
    scale: item.scale,
  };
}

function scoreLabelFor(scale, item, value) {
  if (item.reverse) {
    if (value === scale.min) return "負面狀態明顯";
    if (value === scale.max) return "負面狀態不明顯";
  }
  return scale.labels[value] || `${value} 分`;
}

function getAssessmentUrl(assessmentId) {
  return new URL(`/${assessmentId}/`, getPublicOrigin()).href;
}

function getPublicOrigin() {
  if (isLocalPreview()) return window.location.origin;
  const host = window.location.hostname;
  if (
    host === "pet-behavior-screening.vercel.app" ||
    host.endsWith("-ckvululms-3042s-projects.vercel.app")
  ) {
    return PRODUCTION_ORIGIN;
  }
  return window.location.origin;
}

function getQrCodeUrl(url, size = 180) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&margin=12&data=${encodeURIComponent(
    url
  )}`;
}

function isLocalPreview() {
  return ["localhost", "127.0.0.1", "::1"].includes(window.location.hostname);
}

function getScaleValues(scale) {
  return scale.values || range(scale.min, scale.max);
}

function getScaleMin(scale) {
  return Math.min(...getScaleValues(scale));
}

function getScaleMax(scale) {
  return Math.max(...getScaleValues(scale));
}

function clampPercent(value) {
  return Math.min(100, Math.max(0, value));
}

function range(min, max) {
  return Array.from({ length: max - min + 1 }, (_, index) => min + index);
}

function normalizePatientDigits(value) {
  return String(value || "")
    .replace(/\D/g, "")
    .slice(0, 5);
}

function formatPatientRecordNumber(digits) {
  const normalized = normalizePatientDigits(digits);
  return normalized.length === 5 ? `PT0${normalized}` : "";
}

function getMetaDisplay(assessmentId) {
  const meta = state.meta[assessmentId] || {};
  const patientDigits = normalizePatientDigits(meta.patientDigits || "");
  return {
    ...meta,
    petName: String(meta.petName || "").trim(),
    date: normalizeAssessmentDate(meta.date),
    patientDigits,
    patientRecordNumber: formatPatientRecordNumber(patientDigits),
    externalUser: Boolean(meta.externalUser),
  };
}

function normalizeAssessmentDate(value) {
  const normalized = String(value || "").trim();
  return normalized || getTodayInputDate();
}

function getTodayInputDate() {
  const now = new Date();
  const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
  return localDate.toISOString().slice(0, 10);
}

function focusMetaField(assessmentId, metaName) {
  const field = document.querySelector(
    `[data-assessment="${CSS.escape(assessmentId)}"][data-meta="${CSS.escape(metaName)}"]`
  );
  if (!field) return;
  field.focus();
  field.reportValidity?.();
}

function syncPatientDigitsRequirement(assessmentId) {
  const meta = getMetaDisplay(assessmentId);
  const field = document.querySelector(
    `[data-assessment="${CSS.escape(assessmentId)}"][data-meta="patientDigits"]`
  );
  const label = document.querySelector(
    `[data-patient-required-label="${CSS.escape(assessmentId)}"]`
  );

  if (field) {
    field.required = !meta.externalUser;
    field.setAttribute("aria-required", meta.externalUser ? "false" : "true");
  }

  if (label) {
    label.textContent = meta.externalUser ? "非四院可免填" : "必填";
    label.classList.toggle("conditional-mark", meta.externalUser);
  }
}

function buildSummaryText() {
  const assessment = getActiveAssessment();
  const stats = getStats(assessment);
  const meta = getMetaDisplay(assessment.id);
  const lines = [
    SITE_TITLE,
    assessment.title,
    meta.petName ? `寵物姓名或代號：${meta.petName}` : "",
    meta.patientRecordNumber ? `病歷號碼：${meta.patientRecordNumber}` : "",
    meta.externalUser ? "非四院共用病歷病例：是" : "",
    meta.date ? `填寫日期：${meta.date}` : "",
    `${assessment.totalLabel}：${stats.total} / ${stats.max}`,
    `${assessment.qualityLabel}：${
      stats.completed === stats.itemCount ? `${stats.qualityPercent}%` : "尚未完成"
    }`,
    `完成度：${stats.completed} / ${stats.itemCount}`,
  ].filter(Boolean);

  if (assessment.overall && state.overall[assessment.id]) {
    lines.push(`整體評分：${state.overall[assessment.id]} / ${assessment.overall.max}`);
  }

  lines.push("分類小計：");
  stats.categories.forEach((category) => {
    lines.push(`- ${category.name}：${category.total} / ${category.max}`);
  });

  if (state.notes[assessment.id]) {
    lines.push("備註：");
    lines.push(state.notes[assessment.id]);
  }

  lines.push("提醒：此結果僅供追蹤與獸醫討論，不取代診斷。");
  return lines.join("\n");
}

async function uploadActiveRecord() {
  if (uploadInProgress) return;

  const assessment = getActiveAssessment();
  const stats = getStats(assessment);
  const meta = getMetaDisplay(assessment.id);

  if (!meta.petName) {
    setPanelStatus("請先填寫寵物姓名或代號。", "error");
    focusMetaField(assessment.id, "petName");
    return;
  }

  if (!meta.externalUser && !meta.patientRecordNumber) {
    setPanelStatus(
      "請輸入四院共用病歷號碼後五碼；若不是四院病例，請勾選非四院使用。",
      "error"
    );
    focusMetaField(assessment.id, "patientDigits");
    return;
  }

  if (stats.completed < stats.itemCount) {
    setPanelStatus(
      `尚有 ${stats.itemCount - stats.completed} 題未完成，請完成後再上傳。`,
      "error"
    );
    return;
  }

  if (assessment.overall && !state.overall[assessment.id]) {
    setPanelStatus("請先填寫整體評分，再上傳紀錄。", "error");
    return;
  }

  if (!window.behaviorFirebase?.submitBehaviorRecord) {
    setPanelStatus("紀錄系統尚未載入完成，請稍候再試。", "error");
    return;
  }

  uploadInProgress = true;
  setPanelStatus("正在上傳紀錄，請稍候...", "success");
  openSubmissionProgressModal({ assessment, meta });

  try {
    const record = buildFirebaseRecord(assessment, stats);
    const result = await window.behaviorFirebase.submitBehaviorRecord(record);
    const googleResult = await exportRecordToGoogle(record, result.id);
    if (googleResult.failed) {
      setPanelStatus(
        `已收到問卷，紀錄 ID：${result.id}。但院內 PDF / 表單歸檔暫時未完成：${googleResult.message}`,
        "error"
      );
      openSubmissionModal({
        assessment,
        stats,
        meta,
        recordId: result.id,
        googleResult,
        kind: "warning",
      });
      return;
    }
    if (googleResult.skipped) {
      setPanelStatus(`已收到這份問卷，紀錄 ID：${result.id}。${googleResult.message}`, "success");
      openSubmissionModal({ assessment, stats, meta, recordId: result.id, googleResult });
      return;
    }
    setPanelStatus(`已收到這份問卷，院內紀錄已建立。紀錄 ID：${result.id}`, "success");
    openSubmissionModal({ assessment, stats, meta, recordId: result.id, googleResult });
  } catch (error) {
    console.error(error);
    closeSubmissionModal({ restoreFocus: false, force: true });
    setPanelStatus(
      "上傳或匯出失敗。請通知院內人員協助確認紀錄系統設定。",
      "error"
    );
    openSubmissionFailureModal(
      "上傳或匯出失敗，請稍後再試；若問題持續發生，請通知院內人員協助確認。"
    );
  } finally {
    uploadInProgress = false;
    renderScorePanel();
  }
}

async function exportRecordToGoogle(record, firebaseRecordId) {
  if (isLocalPreview()) {
    return {
      skipped: true,
      message: "院內紀錄 / PDF 匯出會在正式網站設定後啟用。",
    };
  }

  try {
    const response = await fetch("/api/export-record", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ record, firebaseRecordId }),
    });

    if (response.status === 404) {
      return {
        skipped: true,
        message: "目前尚未啟用院內紀錄 / PDF 匯出功能。",
      };
    }

    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
      return {
        failed: true,
        message: result.error || "後端回傳錯誤。",
      };
    }

    return result;
  } catch {
    return {
      failed: true,
      message: "無法連線到 Google 匯出 API。",
    };
  }
}

function buildFirebaseRecord(assessment, stats) {
  const meta = getMetaDisplay(assessment.id);
  const answers = state.answers[assessment.id] || {};
  const normalizedAnswers = [];
  let itemNumber = 1;

  assessment.categories.forEach((category, categoryIndex) => {
    category.items.forEach((rawItem) => {
      const item = normalizeItem(rawItem);
      const scale = item.scale || category.scale || assessment.scale;
      const weight = item.weight || 1;
      const itemId = `${categoryIndex}-${itemNumber}`;
      const score = answers[itemId];
      normalizedAnswers.push({
        itemId,
        itemNumber,
        category: category.name,
        categoryEnglish: category.english,
        question: item.text,
        reverse: Boolean(item.reverse),
        weight,
        score,
        weightedScore: typeof score === "number" ? score * weight : null,
        scoreLabel: typeof score === "number" ? scoreLabelFor(scale, item, score) : "",
      });
      itemNumber += 1;
    });
  });

  return {
    schemaVersion: 1,
    assessmentId: assessment.id,
    assessmentTitle: assessment.title,
    assessmentShortTitle: assessment.shortTitle,
    petNameOrCode: meta.petName || "",
    patientDigits: meta.patientDigits || "",
    patientRecordNumber: meta.externalUser ? "" : meta.patientRecordNumber,
    isExternalUser: meta.externalUser,
    assessmentDate: meta.date || "",
    totalScore: stats.total,
    minScore: stats.min,
    maxScore: stats.max,
    qualityPercent: stats.qualityPercent,
    completionPercent: stats.completionPercent,
    completedItems: stats.completed,
    totalItems: stats.itemCount,
    overallScore: state.overall[assessment.id] || null,
    overallMax: assessment.overall?.max || null,
    interpretationRange: stats.interpretationRange || "",
    interpretationBand: stats.interpretationBand || "",
    interpretation: stats.interpretation,
    interpretationRanges: (assessment.interpretationRanges || []).map((rangeItem) => ({
      range: getInterpretationRangeLabel(rangeItem),
      label: rangeItem.label || "",
      text: rangeItem.text || "",
    })),
    categoryScores: stats.categories,
    answers: normalizedAnswers,
    notes: state.notes[assessment.id] || "",
    userAgent: navigator.userAgent,
  };
}

function setPanelStatus(message, kind = "success") {
  panelStatus = message;
  panelStatusKind = kind;
  renderScorePanel();
}

async function copyText(text) {
  const status = document.querySelector("#copy-status");
  try {
    await navigator.clipboard.writeText(text);
    panelStatus = "已複製。";
    panelStatusKind = "success";
    if (status) {
      status.classList.remove("error");
      status.textContent = panelStatus;
    }
  } catch {
    panelStatus = "無法自動複製，請改用瀏覽器的分享或列印功能。";
    panelStatusKind = "error";
    if (status) {
      status.classList.add("error");
      status.textContent = panelStatus;
    }
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}
