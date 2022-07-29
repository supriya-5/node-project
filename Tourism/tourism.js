
const tourism = (req,res)=>{
    res.send(
        [
            {
                "id": 1,
                "title": "Seoul: The Dazzling Capital City ",
                "Image": "https://steady-custard-d83563.netlify.app/static/media/seoul2.212cc2a35b7b82742dca.webp",
                "category": "Tourism",
                "description":"The dazzling capital city will impress you with its dizzying mix of modern architecture, party vibes, pop culture, beautiful parks & glittering promenades making it one of the most famous places in South Korea and the best cities to visit in South Korea."
              },
              {
                "id": 2,
                "title": "Busan: Something For Everyone",
                "Image": "https://steady-custard-d83563.netlify.app/static/media/busan.292a995942c17f242ccc.webp",
                "category": "Tourism",
                "description":"This second largest city of South Korea is known across the world for hosting Asia’s largest International film festival."       
               },
              
              {
                "id": 3,
                "title": "Gyeongju: A Treasure Trove Of Cultural Sites ",
                "Image": "https://steady-custard-d83563.netlify.app/static/media/Gyeongju.0c473468904dbefdba21.webp",
                "category": "Tourism",
                "description":"One of the best places to go in South Korea, the coastal city of Gyeongju, often called an open-air museum"
              },
              {
                "id": 4,
                "title": "Dadohaehaesang National Park: The Largest National Park In Korea",
                "Image": "https://steady-custard-d83563.netlify.app/static/media/Dado.5ea9a5e9d82f3db474ed.webp",
                "category": "Tourism",
                "description":"One of the most besutiful tourist destinations in South Korea, it is the largest National Park in Korea, this slice of paradise covers 1700 large and small islands and some rock structures."
              },
             
            
              {
                "id": 5,
                "title": "Suwon: Home To A UNESCO World Heritage Site",
                "Image": "https://steady-custard-d83563.netlify.app/static/media/suwon.6a0e2bd69704bd5e3013.webp",
                "category": "Tourism",
                "description":"Capital of the Gyeonggi province bordering Seoul, Suwon is known for its unique Hwaseong Fortress with its imposing stone walls and impressive archways and this has made it one of the best places to visit in Korea."
              },
             
              {
                "id": 6,
                "title": "Seoraksan National Park: A Tentative World Heritage Site",
                "Image": "https://steady-custard-d83563.netlify.app/static/media/Seora.f14288c334820e66e3a2.webp",
                "category": "Tourism",
                "description":"The vivid strokes of nature will greet you every step of the way in the UNESCO protected Seoraksan National Park and one of the most mesmerizing places to witness autumn in Korea."
              },
              
              {
                "id": 7,
                "title": "Andong Hahoe Folk Village: Travel Back In Time",
                "Image": "https://steady-custard-d83563.netlify.app/static/media/Andong.50d3212fa923872e591e.webp",
                "category": "Tourism",
                "description":"Literally meaning ‘the village enveloped by water’ this charming traditional Korean village located in Andong is a UNESCO World Heritage site."
              }
        ]
    )
}

module.exports.tourismData = tourism