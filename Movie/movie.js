const movie =(req,res)=>{
    res.send(
        [
            {
                "id": 1,
                "title": "Parasite",
                "Image": "https://steady-custard-d83563.netlify.app/static/media/parasite.b3a87fd5d6bc153df1da.jpg",
                "category": "Movie",
                "description":"Parasite (Korean: 기생충; Hanja: 寄生蟲; RR: Gisaengchung) is a 2019 South Korean black comedy thriller film directed by Bong Joon-ho, who co-wrote the screenplay with Han Jin-won."
              },
      
              {
                "id": 2,
                "title": "The Wailing",
                "Image": "https://steady-custard-d83563.netlify.app/static/media/wailing.b63cb4269e4a97e51294.jpg",
                "category": "Movie",
                "description":"The Wailing (Korean: 곡성; Hanja: 哭聲; RR: Gokseong) is a 2016 South Korean horror film written and directed by Na Hong-jin and starring Kwak Do-won, Hwang Jung-min, Chun Woo-hee."
              },
      
              {
                "id": 3,
                "title": "Tune in for love",
                "Image": "https://i.pinimg.com/originals/fd/e9/71/fde9714903143a46590b793acf406854.jpg",
                "category": "Movie",
                "description":"Tune in for Love (Korean: 유열의 음악앨범; RR: Yooyeolui Eumakaelbum; lit. Yoo Yeol's Music Album), is a 2019 South Korean romance film directed by Jung Ji-woo and starring Kim Go-eun and Jung Hae-in."
              },
            
              {
                "id": 4,
                "title": "The beauty inside",
                "Image": "https://steady-custard-d83563.netlify.app/static/media/inside.f11ee8ff96a300d3b580.webp",
                "category": "Movie",
                "description":"Woo-jin, a furniture designer who wakes up in a different body every day, falls for Yi-soo, a woman he meets through his work."
              },
      
              {
                "id": 5,
                "title": "Always",
                "Image": "https://steady-custard-d83563.netlify.app/static/media/Always.367e6e0daf4a5570dd5e.jpg",
                "category": "Movie",
                "description":"Always (Korean: 오직 그대만; RR: Ohjik Geudaeman; MR: Ochik kŭtaeman; lit. Only You) is a 2011  South Korean drama film directed by Song Il-gon. Starring So Ji-sub and Han Hyo-joo in the lead roles, it is about a romance between an ex-boxer who has closed his heart to the world and a telemarketer who remains spirited despite slowly going blind.[2]"
              },
      
              {
                "id": 6,
                "title": "Hope",
                "Image": "https://steady-custard-d83563.netlify.app/static/media/hope.85cd3b9c20d92d555395.jpg",
                "category": "Movie",
                "description":"Story of an 8 year old girl coping with a gruesome rape damaging her internally and affecting emotionally, trying to overcome all obstacles in the aftermath of the incident with a good support from those around her."
              },
      
              {
                "id": 7,
                "title": "The Witch",
                "Image": "https://steady-custard-d83563.netlify.app/static/media/witch.56e586f9d4d6360ab80c.jpg",
                "category": "Movie",
                "description":"When she was young, Ja-yoon escaped from a government facility, but lost all her memory. 10 years later, when she appears on a nationally televised competition to win money for her family, her life is turned upside down by faces from her past."
              },
      
        ]
    )
}

module.exports.movieData = movie