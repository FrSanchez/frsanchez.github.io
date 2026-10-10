// Add meditation text to each mystery’s description field.
(function (root) {
  const content = {
  "groups": {
    "gozosos": {
      "name": "Joyful",
      "kind": "Joyful",
      "mysteries": [
        {
          "title": "The Incarnation of the Son of God (Luke 1:28,31,38).",
          "description": "The angel entered her home and greeted her, saying: “Rejoice, full of grace, the Lord is with you”… “You will conceive and give birth to a son, and you will name him Jesus”… Mary then said: “I am the servant of the Lord; let what you have said be fulfilled in me.”"
        },
        {
          "title": "The Visitation of the Virgin Mary to Saint Elizabeth (Luke 1:39–42,45–46).",
          "description": "Mary set out and went without delay to a town in the hill country of Judah. She entered the house of Zechariah and greeted Elizabeth… Elizabeth… exclaimed: “Blessed are you among all women, and blessed is the fruit of your womb!… Blessed are you for having believed.” Mary then said: “My soul sings the greatness of the Lord.”"
        },
        {
          "title": "The Birth of the Child Jesus (Luke 2:6–7,10–11).",
          "description": "While they were in Bethlehem, the time came for her to become a mother; and Mary gave birth to her firstborn Son, wrapped him in swaddling clothes, and laid him in a manger, because there was no room for them at the inn… The angel said to them: “Today, in the city of David, a Savior has been born to you, who is the Messiah, the Lord.”"
        },
        {
          "title": "The Presentation of Jesus in the Temple (Luke 2:22,28–30).",
          "description": "They took the child to Jerusalem to present him to the Lord… Simeon took him in his arms and praised God, saying: “Now, Lord, you may let your servant die in peace, as you have promised, because my eyes have seen salvation.”"
        },
        {
          "title": "The Child Jesus Lost and Found in the Temple (Luke 2:42–43,46).",
          "description": "When the child turned twelve, they went up as usual, and when the festival was over, Mary and Joseph returned, but Jesus remained in Jerusalem without their knowing… On the third day, they found him in the Temple among the teachers of the Law, listening to them and asking them questions."
        }
      ]
    },
    "dolorosos": {
      "name": "Sorrowful",
      "kind": "Sorrowful",
      "mysteries": [
        {
          "title": "The Prayer in the Garden (Luke 22:41–42,44).",
          "description": "He withdrew from them about a stone’s throw, and kneeling down, he prayed: “Father, if you wish, take this cup away from me. But let not my will be done, but yours”… In his anguish, he prayed more intensely."
        },
        {
          "title": "The Scourging of Jesus (John 19:1; Mark 15:15).",
          "description": "Pilate then ordered Jesus to be scourged. “Pilate, wishing to satisfy the crowd, released Barabbas to them; and after having Jesus scourged, he handed him over to be crucified.”"
        },
        {
          "title": "The Crowning with Thorns (John 19:2,5).",
          "description": "The soldiers wove a crown of thorns and placed it on his head. They clothed him in a red robe… Jesus came out, wearing the crown of thorns and the red robe. Pilate said to them: “Here is the man!”"
        },
        {
          "title": "Jesus Carries His Cross (John 19:17; Luke 23:27).",
          "description": "Jesus, carrying the cross himself, went out of the city toward the place called “the Skull.” “Many of the people followed him, along with a large number of women who beat their breasts and lamented for him.”"
        },
        {
          "title": "The Crucifixion and Death of Jesus (John 19:18,25–26).",
          "description": "There they crucified him, and with him two others, one on each side, with Jesus in the middle… Beside the cross of Jesus stood his mother… Seeing his mother and near her the disciple whom he loved, Jesus said to her: “Woman, here is your son.”"
        }
      ]
    },
    "gloriosos": {
      "name": "Glorious",
      "kind": "Glorious",
      "mysteries": [
        {
          "title": "The Resurrection of the Lord (Matthew 28:1,5–6).",
          "description": "After the Sabbath, at dawn on the first day of the week, Mary Magdalene and the other Mary went to visit the tomb… The angel said to the women: “Do not be afraid. I know that you are looking for Jesus, who was crucified. He is not here, for he has risen, as he said he would.”"
        },
        {
          "title": "The Ascension of the Lord (Matthew 28:20; Mark 16:19).",
          "description": "“I will be with you always, until the end of the world.” “After saying this to them, the Lord Jesus was taken up into heaven and is seated at the right hand of God.”"
        },
        {
          "title": "The Coming of the Holy Spirit (Acts 2:2–4).",
          "description": "Suddenly, a sound came from heaven, like a strong gust of wind, and it filled the entire house where they were gathered. Then they saw tongues as of fire appear, which came down separately upon each of them. They were all filled with the Holy Spirit."
        },
        {
          "title": "The Assumption of Mary (Luke 1:48–49; Song of Songs 4:7–8).",
          "description": "“From now on, all generations will call me blessed, for the Almighty has done great things for me.” “You are altogether beautiful, my beloved, and there is no flaw in you. Come with me from Lebanon, my bride…!”"
        },
        {
          "title": "The Coronation of Mary as Queen of Heaven and Earth (Revelation 12:1).",
          "description": "And a great sign appeared in heaven: a Woman clothed with the sun, with the moon under her feet and a crown of twelve stars on her head."
        }
      ]
    },
    "luminosos": {
      "name": "Luminous",
      "kind": "Luminous",
      "mysteries": [
        {
          "title": "The Baptism of Jesus (Matthew 3:13,16–17).",
          "description": "Jesus went from Galilee to the Jordan and came to John to be baptized by him… As soon as he was baptized, Jesus came out of the water. At that moment the heavens opened, and he saw the Spirit of God descend like a dove and come toward him. And a voice was heard from heaven, saying: “This is my dearly beloved Son, in whom I am well pleased.”"
        },
        {
          "title": "The Wedding at Cana (John 2:1,3,5,11).",
          "description": "A wedding was celebrated at Cana in Galilee, and the mother of Jesus was there… When the wine ran out, the mother of Jesus said to him: “They have no wine”… His mother said to the servants: “Do whatever he tells you”… In this way he revealed his glory, and his disciples believed in him."
        },
        {
          "title": "The Proclamation of the Kingdom (Mark 1:14–15).",
          "description": "Jesus went to Galilee. There he proclaimed the Good News of God, saying: “The time has been fulfilled: the Kingdom of God is near. Repent and believe in the Good News.”"
        },
        {
          "title": "The Transfiguration of the Lord (Matthew 17:1–2,5).",
          "description": "Jesus took Peter, James and his brother John, and led them apart to a high mountain. There he was transfigured before them: his face shone like the sun, and his garments became white as light… A voice was heard from the cloud, saying: “This is my dearly beloved Son, in whom I am well pleased: listen to him.”"
        },
        {
          "title": "The Institution of the Eucharist (1 Corinthians 11:23–25).",
          "description": "The Lord Jesus, on the night he was handed over, took bread, gave thanks, broke it and said: “This is my Body, which is given for you”… In the same way, after supper, he took the cup, saying: “This cup is the New Covenant sealed with my Blood.”"
        }
      ]
    }
  },
  "prayers": {
    "ourFather": "Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.",
    "hailMary": "Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.",
    "glory": "Glory be to the Father, and to the Son, and to the Holy Spirit, as it was in the beginning, is now, and ever shall be, world without end. Amen.",
    "maryGrace": "Leader: Mary, Mother of grace and Mother of mercy,",
    "maryResponse": "All: in life and in death, protect us, O great Lady.",
    "fatimaPrayer": "O my Jesus, forgive us our sins and save us from the fires of hell. Lead all souls to heaven, and help especially those most in need of your mercy. Amen.",
    "initialPrayers": [
      "By the sign of the Holy Cross, deliver us from our enemies, O Lord our God. In the name of the Father, and of the Son, and of the Holy Spirit. Amen.",
      "My Lord Jesus Christ, true God and true man, my Creator and Redeemer, because of who you are and because I love you above all things, I am sorry with all my heart for having offended you. I wish and firmly resolve to confess my sins in due time. I offer my life, works and labors in satisfaction for my sins. And I trust that, in your infinite goodness and mercy, you will forgive me and grant me the grace never to offend you again. Amen.",
      "V: Come, Holy Spirit, fill the hearts of your faithful",
      "R: and kindle in them the fire of your love.",
      "V: Send forth your Spirit, O Creator",
      "R: and renew the face of the earth.",
      "O God, who has enlightened the hearts of your children with the light of the Holy Spirit, make us attentive to his inspirations, that we may always delight in what is good and enjoy his consolation. Through Christ our Lord. Amen.",
      "We offer this Rosary for the intentions of the Holy Father, the archbishop, the parish priest, for peace in the world, and for…"
    ],
    "closingPrayers": [
      "For the intentions of the Holy Father, the Archbishop of Seattle, and our parish priest",
      "Hail Mary, Daughter of God the Father, most pure Virgin before childbirth; into your hands we entrust our faith, that you may enlighten it. Full of grace…",
      "Hail Mary, Mother of God the Son, most pure Virgin in childbirth; into your hands we entrust our hope, that you may strengthen it. Full of grace…",
      "Hail Mary, Spouse of God the Holy Spirit, most pure Virgin after childbirth; into your hands we entrust our charity, that you may kindle it. Full of grace…"
    ],
    "litanyOpening": [
      "Lord, have mercy.",
      "Christ, have mercy.",
      "Lord, have mercy.",
      "Christ, hear us.",
      "Christ, graciously hear us.",
      "God, the Father of heaven,\nhave mercy on us.",
      "God the Son, Redeemer of the world,",
      "God the Holy Spirit,",
      "Holy Trinity, one God,"
    ],
    "litanyInvocations": [
      "Holy Mary,",
      "Holy Mother of God,",
      "Holy Virgin of virgins,",
      "Mother of Christ,",
      "Mother of the Church,",
      "Mother of mercy,",
      "Mother of divine grace,",
      "Mother of hope,",
      "Mother most pure,",
      "Mother most chaste,",
      "Mother ever virgin,",
      "Mother immaculate,",
      "Mother most amiable,",
      "Mother most admirable,",
      "Mother of good counsel,",
      "Mother of our Creator,",
      "Mother of our Savior,",
      "Virgin most prudent,",
      "Virgin most venerable,",
      "Virgin most renowned,",
      "Virgin most powerful,",
      "Virgin most clement,",
      "Virgin most faithful,",
      "Mirror of justice,",
      "Seat of wisdom,",
      "Cause of our joy,",
      "Spiritual vessel,",
      "Vessel of honor,",
      "Vessel of singular devotion,",
      "Mystical rose,",
      "Tower of David,",
      "Tower of ivory,",
      "House of gold,",
      "Ark of the Covenant,",
      "Gate of heaven,",
      "Morning star,",
      "Health of the sick,",
      "Refuge of sinners,",
      "Solace of migrants,",
      "Comforter of the afflicted,",
      "Help of Christians,",
      "Queen of Angels,",
      "Queen of Patriarchs,",
      "Queen of Prophets,",
      "Queen of Apostles,",
      "Queen of Martyrs,",
      "Queen of Confessors,",
      "Queen of Virgins,",
      "Queen of all Saints,",
      "Queen conceived without original sin,",
      "Queen assumed into Heaven,",
      "Queen of the Most Holy Rosary,",
      "Queen of the family,",
      "Queen of peace."
    ],
    "finalPrayers": [
      "We give you endless thanks, sovereign Princess, for the blessings we receive each day from your generous hands. Deign, now and always, to take us under your powerful protection, and to plead with you all the more, we greet you, saying:",
      "Hail, Holy Queen, Mother of mercy, our life, our sweetness and our hope; hail! To thee do we cry, poor banished children of Eve; to thee do we send up our sighs, mourning and weeping in this valley of tears. Turn then, most gracious advocate, thine eyes of mercy toward us, and after this our exile, show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary!",
      "Leader: Pray for us, O holy Mother of God,",
      "All: that we may be made worthy of the promises of Christ.",
      "Grant us, we beseech you, O Lord our God, continual health of soul and body; and through the glorious intercession of the Blessed Mary, ever Virgin, may we be freed from the sorrows of this present life and enjoy eternal happiness. Through Christ our Lord. Amen."
    ],
    "rosaryVirginLeader": "Leader: O most holy Virgin of the Rosary, do not allow",
    "rosaryVirginResponse": "All: that we live and die in mortal sin.",
    "ourLadyFatimaLeader": "Leader: Our Lady of Fátima,",
    "ourLadyFatimaResponse": "All: pray for us.",
    "immaculateHeartLeader": "Leader: Immaculate Heart of Mary,",
    "immaculateHeartResponse": "All: be the salvation of my soul.",
    "litanyMercyResponse": "have mercy on us.",
    "litanyResponse": "pray for us.",
    "litanyClosing": [
      "Leader: Lamb of God, who takes away the sins of the world,\nAll: spare us, O Lord.",
      "Leader: Lamb of God, who takes away the sins of the world,\nAll: hear us, O Lord.",
      "Leader: Lamb of God, who takes away the sins of the world,\nAll: have mercy on us."
    ]
  }
};
  if (typeof module !== "undefined" && module.exports) module.exports = content;
  else root.RosaryContentEn = content;
})(typeof globalThis !== "undefined" ? globalThis : this);
