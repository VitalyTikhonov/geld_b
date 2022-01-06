const res = require('express/lib/response')
const { getRandomNumber, addMask, download, getRandomArrayMember } = require('../utils')

const makeAssets = false
const makeTransactions = false

if (makeAssets) {
  let assetData = []

  const assets = [
    { "name": "Tinkoff", "description": "Карта в Tinkoff" },
    { "name": "Sberbank", "description": "Карта в Sberbank" },
    { "name": "VTB", "description": "Карта в VTB" },
    { "name": "Reiffeisen", "description": "Карта в Reiffeisen" },
    { "name": "Sberbank", "description": "Счет в Sberbank" },
  ]

  assets.forEach((i) =>
    assetData.push({ "name": `${i.name}_карта`, "description": i.description, })
  )

  download(JSON.stringify(assetData), 'dev_files/fake_assets.json', 'application/json')
}

if (makeTransactions) {
  let transactionData = []
  const categories = [
    "А0/ Питание",
    "А1/ Продукты",
    "А2/ Общепит_и_доставка_продуктов",
    "А3/ БАД",
    "Б0/ Хозтовары_и_гигиена",
    "В0/ Одежда,_имидж_и_экипировка",
    "В1/ Одежда_и_обувь_общего_назначения",
    "В2/ Рюкзаки,_портфели,_барсетки,_зонты",
    "В3/ Спортивная_одежда_и_обувь",
    "В4/ Парикмахерская",
    "В5/ Услуги_ремонта_одежды_и_обуви",
    "Г0/ Медицина",
    "Г1/ Мед._услуги_сводн._кат.",
    "Г2/ Стоматология",
    "Г3/ Лекарства_и_медикаменты_(не_БАД)",
    "Г4/ Очки",
    "Е0/ Жилье",
    "Е1/ Ул_",
    "Е2/ Ул_Услуги_УК",
    "Е3/ Ул_Электричество",
    "Е4/ Ул_Газ"
  ]

  function pickCategories() {
    let result = []
    for (let i = 1; i <= getRandomNumber(1, 4); i++) {
      result.push(getRandomArrayMember(categories))
    }
    return result
  }

  
  for (let i = 0; i <= 19; i++) {
    const d = addMask(getRandomNumber(1, 28), 0, 2)
    const h = addMask(getRandomNumber(0, 23), 0, 2)
    const m = addMask(getRandomNumber(0, 59), 0, 2)
    const s = addMask(getRandomNumber(0, 59), 0, 2)

    transactionData.push(
      {
        "asset": getRandomNumber(1, 4),
        "timestamp": `2021-01-${d} ${h}:${m}:${s}`,
        "categories": pickCategories(),
        "value": getRandomNumber(1, 5000)
      }
    )
  }

  download(JSON.stringify(transactionData), 'dev_files/fake_transactions.json', 'application/json')
}
