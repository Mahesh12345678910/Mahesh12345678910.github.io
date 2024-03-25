let k=adobeDataLayer.length-1;
let formfield="";

if(typeof adobeDataLayer[k].products!=undefined)
{
console.log(adobeDataLayer[k].products);
let prodlen=adobeDataLayer[k].products.length;

for(let i=0;i<prodlen;i++)
{
    let product=adobeDataLayer[k].products[i];
    
    let prodfields=product.productFields;
    if(prodfields.length>0)
    {
        for(let j=0;j<prodfields.length;j++)
        {
            formfield+=prodfields[j].formFieldName+":"+prodfields[j].formFieldValue+"_";
        }
    }

}
console.log(formfield)
}


if(typeof adobeDataLayer[k].products[0].productFields!=undefined && adobeDataLayer[k].products[0].productFields.length!=0)
{
    console.log(adobeDataLayer[k].products[0].productFields);
  for( let  j=0;j<adobeDataLayer[k].products[0].productFields.length;j+=1)
    {
  formField+=adobeDataLayer[k].products[0].productFields[j].formFieldName+":"+adobeDataLayer[k].products[0].productFields[j].formFieldValue+"_";
    }
  console.log('***Final value of formFields is*  '+formField);
}
  

/*Evar 21 and Lis1"//*/

var trackVars=s.linkTrackVars.split(",");

if(trackVars.includes("eVar21"))
{
   _satellite.logger.log("eVar21 Added Already",s.eVar21);
   if(s.eVar21 !=_satellite.getVar('Lily ID-EDDL'))
     {
       s.eVar21=_satellite.getVar('Lily ID-EDDL');
     }
}
else
  {
    trackVars.push("eVar21");
    s.linkTrackVars=trackVars.join(",");
    s.eVar21=_satellite.getVar('Lily ID-EDDL');
  }

_satellite.logger.log("eVar21 Added New",s.eVar21);


var Session_ID ="PCAZ36AV"

var obj=[
  {
      "xdm": {
          "eventType": "commerce.purchases",
          "web": {
              "webPageDetails": {
                  "URL": "https://test.avo.africa/payments/success?orderId=LVE-RRQ-2WK&pointsEarned=15.99&vertical="
              },
              "webReferrer": {
                  "URL": ""
              }
          },
          "device": {
              "screenHeight": 720,
              "screenWidth": 1280,
              "screenOrientation": "landscape"
          },
          "environment": {
              "type": "browser",
              "browserDetails": {
                  "viewportWidth": 868,
                  "viewportHeight": 551
              }
          },
          "placeContext": {
              "localTimezoneOffset": -120,
              "localTime": "2024-03-14T07:20:30.353+02:00"
          },
          "timestamp": "2024-03-14T05:20:30.353Z",
          "implementationDetails": {
              "name": "https://ns.adobe.com/experience/alloy/reactor",
              "version": "2.19.1+2.21.3",
              "environment": "browser"
          },
          "_nedbank": {
              "identities": {
                  "EPN": "",
                  "ecid": "17143288198606579892717960819696769055",
                  "sessionID": "PCAZ36AV",
                  "wakandaID": ""
              }
          },
          "commerce": {
              "purchases": {
                  "value": 1
              }
          },
          "_experience": {
              "analytics": {
                  "customDimensions": {
                      "eVars": {
                          "eVar1": "C6.7d_Order_Confirmation",
                          "eVar9": "PWA",
                          "eVar10": "Customer",
                          "eVar29": "PCAZ36AV",
                          "eVar40": "https://test.avo.africa/payments/success?orderId=LVE-RRQ-2WK&pointsEarned=15.99&vertical=",
                          "eVar52": "",
                          "eVar53": "",
                          "eVar56": "",
                          "eVar64": "Payments",
                          "eVar71": "",
                          "eVar86": "",
                          "eVar104": "",
                          "eVar105": "",
                          "eVar107": "",
                          "eVar108": ""
                      }
                  }
              }
          },
          "productListItems": [
              {
                  "_experience": {
                      "analytics": {
                          "customDimensions": {
                              "eVars": {
                                  "eVar93": "1RDK-K5Z2",
                                  "eVar96": "SHOPPING",
                                  "eVar100": "Creative Housewares store",
                                  "eVar101": "Creative Housewares store",
                                  "eVar103": "Casals Chainsaw Electric Plastic Red 400mm 2000w"
                              }
                          },
                          "event1to100": {
                              "event89": "",
                              "event90": ""
                          }
                      }
                  },
                  "SKU": "1RDK-K5Z2",
                  "currencyCode": "ZAR",
                  "name": "Casals Chainsaw Electric Plastic Red 400mm 2000w",
                  "priceTotal": 1599,
                  "quantity": 1
              }
          ]
      }
  }
]

[
  {
      "xdm": {
          "eventType": "commerce.checkouts",
          "web": {
              "webPageDetails": {
                  "URL": "https://test.avo.africa/ecommerce/cart/01HRXPD0Z0RRJ9R3QH3WDRD1XS/checkout"
              },
              "webReferrer": {
                  "URL": ""
              }
          },
          "device": {
              "screenHeight": 720,
              "screenWidth": 1280,
              "screenOrientation": "landscape"
          },
          "environment": {
              "type": "browser",
              "browserDetails": {
                  "viewportWidth": 868,
                  "viewportHeight": 551
              }
          },
          "placeContext": {
              "localTimezoneOffset": -120,
              "localTime": "2024-03-14T07:19:30.255+02:00"
          },
          "timestamp": "2024-03-14T05:19:30.255Z",
          "implementationDetails": {
              "name": "https://ns.adobe.com/experience/alloy/reactor",
              "version": "2.19.1+2.21.3",
              "environment": "browser"
          },
          "_nedbank": {
              "identities": {
                  "EPN": "",
                  "ecid": "17143288198606579892717960819696769055",
                  "sessionID": "PCAZ36AV",
                  "wakandaID": ""
              }
          },
          "commerce": {
              "checkouts": {
                  "value": 1
              }
          },
          "_experience": {
              "analytics": {
                  "event1to100": {
                      "event2": {
                          "value": 1
                      }
                  },
                  "customDimensions": {
                      "eVars": {
                          "eVar1": "C5.3.2h_EShop_Check_Out",
                          "eVar9": "PWA",
                          "eVar10": "Customer",
                          "eVar29": "PCAZ36AV",
                          "eVar40": "https://test.avo.africa/ecommerce/cart/01HRXPD0Z0RRJ9R3QH3WDRD1XS/checkout",
                          "eVar64": "EShop"
                      }
                  }
              }
          },
          "productListItems": [
              {
                  "_experience": {
                      "analytics": {
                          "customDimensions": {
                              "eVars": {
                                  "eVar93": "1RDK-K5Z2",
                                  "eVar96": "SHOPPING",
                                  "eVar100": "Casals Chainsaw Electric Plastic Red 400mm 2000w",
                                  "eVar101": "Casals Chainsaw Electric Plastic Red 400mm 2000w",
                                  "eVar103": "Casals Chainsaw Electric Plastic Red 400mm 2000w"
                              }
                          }
                      }
                  },
                  "SKU": "1RDK-K5Z2",
                  "priceTotal": 1599,
                  "quantity": 1,
                  "name": "Casals Chainsaw Electric Plastic Red 400mm 2000w",
                  "productId": "1RDK-K5Z2"
              }
          ]
      }
  }
]

[
  {
      "xdm": {
          "eventType": "commerce.productListAdds",
          "web": {
              "webPageDetails": {
                  "URL": "https://test.avo.africa/ecommerce/casals-chainsaw-electric-plastic-red/1RDK-K5Z2-2X3U"
              },
              "webReferrer": {
                  "URL": ""
              }
          },
          "device": {
              "screenHeight": 720,
              "screenWidth": 1280,
              "screenOrientation": "landscape"
          },
          "environment": {
              "type": "browser",
              "browserDetails": {
                  "viewportWidth": 868,
                  "viewportHeight": 551
              }
          },
          "placeContext": {
              "localTimezoneOffset": -120,
              "localTime": "2024-03-14T07:19:18.663+02:00"
          },
          "timestamp": "2024-03-14T05:19:18.663Z",
          "implementationDetails": {
              "name": "https://ns.adobe.com/experience/alloy/reactor",
              "version": "2.19.1+2.21.3",
              "environment": "browser"
          },
          "_nedbank": {
              "identities": {
                  "EPN": "",
                  "ecid": "17143288198606579892717960819696769055",
                  "sessionID": "PCAZ36AV",
                  "wakandaID": ""
              }
          },
          "commerce": {
              "productListAdds": {
                  "value": 1
              }
          },
          "_experience": {
              "analytics": {
                  "customDimensions": {
                      "eVars": {
                          "eVar1": "C5.3.2c_EShop_CategoryResults_Details",
                          "eVar9": "PWA",
                          "eVar10": "Customer",
                          "eVar29": "PCAZ36AV",
                          "eVar40": "https://test.avo.africa/ecommerce/casals-chainsaw-electric-plastic-red/1RDK-K5Z2-2X3U",
                          "eVar64": "EShop",
                          "eVar71": "Success"
                      }
                  }
              }
          },
          "productListItems": [
              {
                  "_experience": {
                      "analytics": {
                          "customDimensions": {
                              "eVars": {
                                  "eVar93": "1RDK-K5Z2",
                                  "eVar96": "SHOPPING",
                                  "eVar100": "CASALS",
                                  "eVar101": "Creative Housewares store",
                                  "eVar103": "Casals Chainsaw Electric Plastic Red 400mm 2000w"
                              }
                          }
                      }
                  },
                  "SKU": "1RDK-K5Z2",
                  "priceTotal": 1599,
                  "quantity": 1,
                  "name": "Casals Chainsaw Electric Plastic Red 400mm 2000w",
                  "productId": "1RDK-K5Z2"
              }
          ]
      }
  }
]

[
  {
      "xdm": {
          "eventType": "commerce.productListViews",
          "web": {
              "webPageDetails": {
                  "URL": "https://test.avo.africa/ecommerce/casals-chainsaw-electric-plastic-red/1RDK-K5Z2-2X3U"
              },
              "webReferrer": {
                  "URL": ""
              }
          },
          "device": {
              "screenHeight": 720,
              "screenWidth": 1280,
              "screenOrientation": "landscape"
          },
          "environment": {
              "type": "browser",
              "browserDetails": {
                  "viewportWidth": 868,
                  "viewportHeight": 551
              }
          },
          "placeContext": {
              "localTimezoneOffset": -120,
              "localTime": "2024-03-14T07:19:08.915+02:00"
          },
          "timestamp": "2024-03-14T05:19:08.915Z",
          "implementationDetails": {
              "name": "https://ns.adobe.com/experience/alloy/reactor",
              "version": "2.19.1+2.21.3",
              "environment": "browser"
          },
          "_nedbank": {
              "identities": {
                  "EPN": "",
                  "ecid": "17143288198606579892717960819696769055",
                  "sessionID": "PCAZ36AV",
                  "wakandaID": ""
              }
          },
          "commerce": {
              "productViews": {
                  "value": 1
              }
          },
          "_experience": {
              "analytics": {
                  "customDimensions": {
                      "eVars": {
                          "eVar1": "C5.3.2c_EShop_CategoryResults_Details",
                          "eVar3": "C5.3.2_EShop_Landing",
                          "eVar6": "authenticated",
                          "eVar9": "PWA",
                          "eVar10": "Customer",
                          "eVar29": "PCAZ36AV",
                          "eVar40": "https://test.avo.africa/ecommerce/casals-chainsaw-electric-plastic-red/1RDK-K5Z2-2X3U",
                          "eVar71": ""
                      }
                  }
              }
          },
          "productListItems": [
              {
                  "SKU": "1RDK-K5Z2",
                  "name": "Casals Chainsaw Electric Plastic Red 400mm 2000w",
                  "quantity": 1,
                  "priceTotal": 1599,
                  "_experience": {
                      "analytics": {
                          "customDimensions": {
                              "eVars": {
                                  "eVar93": "1RDK-K5Z2",
                                  "eVar96": "SHOPPING",
                                  "eVar100": "CASALS",
                                  "eVar101": "Creative Housewares store",
                                  "eVar103": "Casals Chainsaw Electric Plastic Red 400mm 2000w"
                              }
                          }
                      }
                  }
              }
          ]
      }
  }
]
