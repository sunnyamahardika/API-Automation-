 const schema_createcart = {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer"
      },
      "products": {
        "type": "array",
        "items": [
          {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer"
              },
              "title": {
                "type": "string"
              },
              "price": {
                "type": "number"
              },
              "quantity": {
                "type": "integer"
              },
              "total": {
                "type": "number"
              },
              "discountPercentage": {
                "type": "number"
              },
              "discountedPrice": {
                "type": "integer"
              },
              "thumbnail": {
                "type": "string"
              }
            },
            "required": [
              "id",
              "title",
              "price",
              "quantity",
              "total",
              "discountPercentage",
              "discountedPrice",
              "thumbnail"
            ]
          }
        ]
      },
      "total": {
        "type": "number"
      },
      "discountedTotal": {
        "type": "integer"
      },
      "userId": {
        "type": "integer"
      },
      "totalProducts": {
        "type": "integer"
      },
      "totalQuantity": {
        "type": "integer"
      }
    },
    "required": [
      "id",
      "products",
      "total",
      "discountedTotal",
      "userId",
      "totalProducts",
      "totalQuantity"
    ]
  }
  export default schema_createcart;