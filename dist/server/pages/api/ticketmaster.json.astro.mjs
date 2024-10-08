export { renderers } from '../../renderers.mjs';

const GET = async ({ params, request }) => {
  const event = {
    "_embedded": {
      "events": [
        {
          "name": "San Antonio Spurs vs Phoenix Suns",
          "type": "event",
          "id": "G5dIZb8kECzK3",
          "test": false,
          "url": "https://www.ticketmaster.com/san-antonio-spurs-vs-phoenix-suns-austin-texas-02-20-2025/event/3A006101A73B84D2",
          "locale": "en-us",
          "images": [
            {
              "ratio": "16_9",
              "url": "https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_TABLET_LANDSCAPE_16_9.jpg",
              "width": 1024,
              "height": 576,
              "fallback": false
            },
            {
              "ratio": "3_2",
              "url": "https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_TABLET_LANDSCAPE_3_2.jpg",
              "width": 1024,
              "height": 683,
              "fallback": false
            },
            {
              "ratio": "16_9",
              "url": "https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_RETINA_LANDSCAPE_16_9.jpg",
              "width": 1136,
              "height": 639,
              "fallback": false
            },
            {
              "ratio": "16_9",
              "url": "https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_EVENT_DETAIL_PAGE_16_9.jpg",
              "width": 205,
              "height": 115,
              "fallback": false
            },
            {
              "ratio": "16_9",
              "url": "https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              "width": 2048,
              "height": 1152,
              "fallback": false
            },
            {
              "ratio": "16_9",
              "url": "https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_SOURCE",
              "width": 2426,
              "height": 1365,
              "fallback": false
            },
            {
              "ratio": "4_3",
              "url": "https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_CUSTOM.jpg",
              "width": 305,
              "height": 225,
              "fallback": false
            },
            {
              "ratio": "16_9",
              "url": "https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_RECOMENDATION_16_9.jpg",
              "width": 100,
              "height": 56,
              "fallback": false
            },
            {
              "ratio": "3_2",
              "url": "https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_ARTIST_PAGE_3_2.jpg",
              "width": 305,
              "height": 203,
              "fallback": false
            },
            {
              "ratio": "16_9",
              "url": "https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_RETINA_PORTRAIT_16_9.jpg",
              "width": 640,
              "height": 360,
              "fallback": false
            },
            {
              "ratio": "3_2",
              "url": "https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_RETINA_PORTRAIT_3_2.jpg",
              "width": 640,
              "height": 427,
              "fallback": false
            }
          ],
          "sales": {
            "public": {
              "startDateTime": "2024-08-16T15:00:00Z",
              "startTBD": false,
              "startTBA": false,
              "endDateTime": "2025-02-21T03:30:00Z"
            },
            "presales": [
              {
                "startDateTime": "2024-08-15T22:00:00Z",
                "endDateTime": "2024-08-16T14:45:00Z",
                "name": "Moody Center Venue Presale"
              },
              {
                "startDateTime": "2024-08-15T21:00:00Z",
                "endDateTime": "2024-08-16T14:45:00Z",
                "name": "Moody Center Member Presale"
              },
              {
                "startDateTime": "2024-08-15T20:00:00Z",
                "endDateTime": "2024-08-16T14:59:00Z",
                "name": "Spurs Fan Club/Ticketmaster/Frost Bank"
              }
            ]
          },
          "dates": {
            "start": {
              "localDate": "2025-02-20",
              "localTime": "20:30:00",
              "dateTime": "2025-02-21T02:30:00Z",
              "dateTBD": false,
              "dateTBA": false,
              "timeTBA": false,
              "noSpecificTime": false
            },
            "timezone": "America/Chicago",
            "status": {
              "code": "onsale"
            },
            "spanMultipleDays": false
          },
          "classifications": [
            {
              "primary": true,
              "segment": {
                "id": "KZFzniwnSyZfZ7v7nE",
                "name": "Sports"
              },
              "genre": {
                "id": "KnvZfZ7vAde",
                "name": "Basketball"
              },
              "subGenre": {
                "id": "KZazBEonSMnZfZ7vFJA",
                "name": "NBA"
              },
              "type": {
                "id": "KZAyXgnZfZ7v7l1",
                "name": "Group"
              },
              "subType": {
                "id": "KZFzBErXgnZfZ7vA7d",
                "name": "Team"
              },
              "family": false
            }
          ],
          "promoter": {
            "id": "694",
            "name": "NBA EXHIBITION & PRESEASON",
            "description": "NBA EXHIBITION & PRESEASON / NTL / USA"
          },
          "promoters": [
            {
              "id": "694",
              "name": "NBA EXHIBITION & PRESEASON",
              "description": "NBA EXHIBITION & PRESEASON / NTL / USA"
            }
          ],
          "priceRanges": [
            {
              "type": "standard",
              "currency": "USD",
              "min": 115,
              "max": 2371
            }
          ],
          "products": [
            {
              "name": "PARKWHIZ MOODY CENTER ATX",
              "id": "G5dIZb81rXUSg",
              "url": "https://www.ticketmaster.com/parkwhiz-moody-center-atx-austin-texas-02-20-2025/event/3A0061029EFB6CF5",
              "type": "Upsell",
              "classifications": [
                {
                  "primary": true,
                  "segment": {
                    "id": "KZFzniwnSyZfZ7v7n1",
                    "name": "Miscellaneous"
                  },
                  "genre": {
                    "id": "KnvZfZ7v7ll",
                    "name": "Undefined"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7vAv1",
                    "name": "Undefined"
                  },
                  "type": {
                    "id": "KZAyXgnZfZ7vAva",
                    "name": "Parking"
                  },
                  "subType": {
                    "id": "KZFzBErXgnZfZ7vAFe",
                    "name": "Regular"
                  },
                  "family": false
                }
              ]
            }
          ],
          "seatmap": {
            "staticUrl": "https://mapsapi.tmol.io/maps/geometry/3/event/3A006101A73B84D2/staticImage?type=png&systemId=HOST",
            "id": "seatmap"
          },
          "accessibility": {
            "ticketLimit": 4,
            "id": "accessibility"
          },
          "ticketLimit": {
            "info": "There is an overall 8 ticket limit for this event.",
            "id": "ticketLimit"
          },
          "ageRestrictions": {
            "legalAgeEnforced": false,
            "id": "ageRestrictions"
          },
          "ticketing": {
            "safeTix": {
              "enabled": true,
              "inAppOnlyEnabled": true
            },
            "allInclusivePricing": {
              "enabled": false
            },
            "id": "ticketing"
          },
          "_links": {
            "self": {
              "href": "/discovery/v2/events/G5dIZb8kECzK3?locale=en-us"
            },
            "attractions": [
              {
                "href": "/discovery/v2/attractions/K8vZ9171ov0?locale=en-us"
              },
              {
                "href": "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
              }
            ],
            "venues": [
              {
                "href": "/discovery/v2/venues/KovZ917ANwG?locale=en-us"
              }
            ]
          },
          "_embedded": {
            "venues": [
              {
                "name": "Moody Center ATX",
                "type": "venue",
                "id": "KovZ917ANwG",
                "test": false,
                "url": "https://www.ticketmaster.com/moody-center-atx-tickets-austin/venue/476228",
                "locale": "en-us",
                "images": [
                  {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dbimages/22076v.jpg",
                    "width": 205,
                    "height": 115,
                    "fallback": false
                  }
                ],
                "postalCode": "78712",
                "timezone": "America/Chicago",
                "city": {
                  "name": "Austin"
                },
                "state": {
                  "name": "Texas",
                  "stateCode": "TX"
                },
                "country": {
                  "name": "United States Of America",
                  "countryCode": "US"
                },
                "address": {
                  "line1": "2001 Robert Dedman Drive"
                },
                "location": {
                  "longitude": "-97.730837",
                  "latitude": "30.280735"
                },
                "markets": [
                  {
                    "name": "San Antonio and Austin",
                    "id": "40"
                  }
                ],
                "dmas": [
                  {
                    "id": 222
                  },
                  {
                    "id": 379
                  },
                  {
                    "id": 380
                  }
                ],
                "upcomingEvents": {
                  "archtics": 2,
                  "ticketmaster": 52,
                  "_total": 54,
                  "_filtered": 0
                },
                "_links": {
                  "self": {
                    "href": "/discovery/v2/venues/KovZ917ANwG?locale=en-us"
                  }
                }
              }
            ],
            "attractions": [
              {
                "name": "San Antonio Spurs",
                "type": "attraction",
                "id": "K8vZ9171ov0",
                "test": false,
                "url": "https://www.ticketmaster.com/san-antonio-spurs-tickets/artist/806012",
                "locale": "en-us",
                "externalLinks": {
                  "twitter": [
                    {
                      "url": "https://twitter.com/spurs"
                    }
                  ],
                  "facebook": [
                    {
                      "url": "https://www.facebook.com/Spurs"
                    }
                  ],
                  "wiki": [
                    {
                      "url": "https://en.wikipedia.org/wiki/San_Antonio_Spurs"
                    }
                  ],
                  "instagram": [
                    {
                      "url": "https://www.instagram.com/spurs/"
                    }
                  ],
                  "homepage": [
                    {
                      "url": "https://www.nba.com/spurs/"
                    }
                  ]
                },
                "aliases": [
                  "san antonio spurs ticket exchange",
                  "spurs exchange",
                  "spurs ticket exchange"
                ],
                "images": [
                  {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_TABLET_LANDSCAPE_16_9.jpg",
                    "width": 1024,
                    "height": 576,
                    "fallback": false
                  },
                  {
                    "ratio": "3_2",
                    "url": "https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_TABLET_LANDSCAPE_3_2.jpg",
                    "width": 1024,
                    "height": 683,
                    "fallback": false
                  },
                  {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_RETINA_LANDSCAPE_16_9.jpg",
                    "width": 1136,
                    "height": 639,
                    "fallback": false
                  },
                  {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_EVENT_DETAIL_PAGE_16_9.jpg",
                    "width": 205,
                    "height": 115,
                    "fallback": false
                  },
                  {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                    "width": 2048,
                    "height": 1152,
                    "fallback": false
                  },
                  {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_SOURCE",
                    "width": 2426,
                    "height": 1365,
                    "fallback": false
                  },
                  {
                    "ratio": "4_3",
                    "url": "https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_CUSTOM.jpg",
                    "width": 305,
                    "height": 225,
                    "fallback": false
                  },
                  {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_RECOMENDATION_16_9.jpg",
                    "width": 100,
                    "height": 56,
                    "fallback": false
                  },
                  {
                    "ratio": "3_2",
                    "url": "https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_ARTIST_PAGE_3_2.jpg",
                    "width": 305,
                    "height": 203,
                    "fallback": false
                  },
                  {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_RETINA_PORTRAIT_16_9.jpg",
                    "width": 640,
                    "height": 360,
                    "fallback": false
                  },
                  {
                    "ratio": "3_2",
                    "url": "https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_RETINA_PORTRAIT_3_2.jpg",
                    "width": 640,
                    "height": 427,
                    "fallback": false
                  }
                ],
                "classifications": [
                  {
                    "primary": true,
                    "segment": {
                      "id": "KZFzniwnSyZfZ7v7nE",
                      "name": "Sports"
                    },
                    "genre": {
                      "id": "KnvZfZ7vAde",
                      "name": "Basketball"
                    },
                    "subGenre": {
                      "id": "KZazBEonSMnZfZ7vFJA",
                      "name": "NBA"
                    },
                    "type": {
                      "id": "KZAyXgnZfZ7v7l1",
                      "name": "Group"
                    },
                    "subType": {
                      "id": "KZFzBErXgnZfZ7vA7d",
                      "name": "Team"
                    },
                    "family": false
                  }
                ],
                "upcomingEvents": {
                  "tmr": 13,
                  "ticketmaster": 74,
                  "_total": 87,
                  "_filtered": 0
                },
                "_links": {
                  "self": {
                    "href": "/discovery/v2/attractions/K8vZ9171ov0?locale=en-us"
                  }
                }
              },
              {
                "name": "Phoenix Suns",
                "type": "attraction",
                "id": "K8vZ9171oZf",
                "test": false,
                "url": "https://www.ticketmaster.com/phoenix-suns-tickets/artist/806004",
                "locale": "en-us",
                "externalLinks": {
                  "twitter": [
                    {
                      "url": "https://twitter.com/Suns"
                    }
                  ],
                  "facebook": [
                    {
                      "url": "https://www.facebook.com/suns/"
                    }
                  ],
                  "wiki": [
                    {
                      "url": "https://en.wikipedia.org/wiki/Phoenix_Suns"
                    }
                  ],
                  "instagram": [
                    {
                      "url": "https://www.instagram.com/suns/"
                    }
                  ],
                  "homepage": [
                    {
                      "url": "https://www.nba.com/suns/"
                    }
                  ]
                },
                "aliases": [
                  "phoenix",
                  "suns",
                  "phoenix suns exchange",
                  "phoenix suns team exchange",
                  "phoenix suns season ticket holders",
                  "phoenix suns season tix holders",
                  "phoenix suns ticket exchange",
                  "suns exchange",
                  "suns season ticket holders",
                  "suns season tix holders",
                  "suns team exchange",
                  "suns ticket exchange"
                ],
                "images": [
                  {
                    "ratio": "4_3",
                    "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg",
                    "width": 305,
                    "height": 225,
                    "fallback": false
                  },
                  {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg",
                    "width": 640,
                    "height": 360,
                    "fallback": false
                  },
                  {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg",
                    "width": 205,
                    "height": 115,
                    "fallback": false
                  },
                  {
                    "ratio": "3_2",
                    "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg",
                    "width": 305,
                    "height": 203,
                    "fallback": false
                  },
                  {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg",
                    "width": 1024,
                    "height": 576,
                    "fallback": false
                  },
                  {
                    "ratio": "3_2",
                    "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg",
                    "width": 640,
                    "height": 427,
                    "fallback": false
                  },
                  {
                    "ratio": "3_2",
                    "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg",
                    "width": 1024,
                    "height": 683,
                    "fallback": false
                  },
                  {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg",
                    "width": 1136,
                    "height": 639,
                    "fallback": false
                  },
                  {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg",
                    "width": 100,
                    "height": 56,
                    "fallback": false
                  },
                  {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_SOURCE",
                    "width": 2048,
                    "height": 1152,
                    "fallback": false
                  }
                ],
                "classifications": [
                  {
                    "primary": true,
                    "segment": {
                      "id": "KZFzniwnSyZfZ7v7nE",
                      "name": "Sports"
                    },
                    "genre": {
                      "id": "KnvZfZ7vAde",
                      "name": "Basketball"
                    },
                    "subGenre": {
                      "id": "KZazBEonSMnZfZ7vFJA",
                      "name": "NBA"
                    },
                    "type": {
                      "id": "KZAyXgnZfZ7v7l1",
                      "name": "Group"
                    },
                    "subType": {
                      "id": "KZFzBErXgnZfZ7vA7d",
                      "name": "Team"
                    },
                    "family": false
                  }
                ],
                "upcomingEvents": {
                  "tmr": 10,
                  "ticketmaster": 77,
                  "_total": 87,
                  "_filtered": 0
                },
                "_links": {
                  "self": {
                    "href": "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
                  }
                }
              }
            ]
          }
        }
      ]
    },
    "_links": {
      "self": {
        "href": "/discovery/v2/events.json?id=G5dIZb8kECzK3"
      }
    },
    "page": {
      "size": 20,
      "totalElements": 1,
      "totalPages": 1,
      "number": 0
    }
  };
  return new Response(JSON.stringify(event), {
    status: 201,
    headers: {
      "Content-Type": "application/json"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
