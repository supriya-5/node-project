const food =(req,res)=>{
    res.send(
        [
            {
                "id": 1,
                "title": "Bibimbap (Rice Bowl)",
                "Image": "https://steady-custard-d83563.netlify.app/static/media/bimbap.4038784e6561c1a0324b.webp",
                "category": "Food",
                "description":"Bibimbap was created as a Royaldish in yesteryears but slowly it became the favorite staple lunch meal among the Korean dishes."
      
              },
      
              {
                "id": 2,
                "title": "Japchae (Stir-Fried Glass Noodles)",
                "Image": "https://steady-custard-d83563.netlify.app/static/media/jap.7a30161d1bdd5a0dcc75.webp",
                "category": "Food",
                "description":"Arguably Korea’s favourite noodle dish, Japchae is made up of glass noodles stirred in sesame oil with beef, mushrooms, and an assortment of other vegetables. These clear, thin noodles are made with sweet potato."
              },
              
              {
                "id": 3,
                "title": "Haemul Pajeon (Seafood Vegetable Pancake)",
                "Image": "https://steady-custard-d83563.netlify.app/static/media/seafood.0a9b36bea06af6fc9ebe.webp",
                "category": "Food",
                "description":"For all seafood lovers out there, Haemul Pajeon is one dish you should put on your list. Crunchy on the outside, this  pancake is made with rice and egg batter mixed with a variety of seafood and green onions."
              },
      
              {
                "id": 4,
                "title": "Kimbap/Gimbap (Korean-Style Sushi)",
                "Image": "https://steady-custard-d83563.netlify.app/static/media/gimbap.be4a0efb53e49fa86818.webp",
                "category": "Food",
                "description":"Gimbap or Kimbap is a popular grab-and-go Korean street food which resemble a lot like Japanese sushi rolls."
              },
      
      
              {
                "id": 5,
                "title": "Sundubu Jjigae (Soft Tofu Stew)",
                "Image": "https://steady-custard-d83563.netlify.app/static/media/soup.3908e6d0eacecff70522.webp",
                "category": "Food",
                "description":"Soft Tofu Stew is a party of unusual flavours in a bowl. A popular Korean Stew is made with Tofu, vegetables, meat, seafood, and chilli paste with a raw egg thrown over the top.The stew is served in a large  stone bowl alongside rice and kimchi."
              },
      
              {
                "id": 6,
                "title": "Soy Sauce Crab",
                "Image": "https://steady-custard-d83563.netlify.app/static/media/crab.c9403eef115ac498a383.webp",
                "category": "Food",
                "description":"Crab marinated in soy sauce or ganjang gejang is an addictive food for Koreans. It has a tangy bitter taste and is eaten cold instead of hot."
              },
      
      
              {
                "id": 7,
                "title": "Jjajangmyeon",
                "Image": "https://steady-custard-d83563.netlify.app/static/media/jjaj.aa242f9bf7aee5e9115f.webp",
                "category": "Food",
                "description":"Originally a Chinese dish, Korean has acquired Jjajangmyeon and made their own thicker, flavorsome and tastier version of it. It may not be the most famous Korean food, but Koreans eat Jjajangmyeon at least once a week."
              },
      
        ]
    )
}

module.exports.foodData = food