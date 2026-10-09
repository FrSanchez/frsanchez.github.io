// Add meditation text to each mystery’s description field.
(function (root) {
  const content = {
  "groups": {
    "gozosos": {
      "name": "Joyful",
      "kind": "Joyful",
      "mysteries": [
        {
          "title": "The Incarnation of the Son of God (Luke 1:37).",
          "description": ""
        },
        {
          "title": "The Visitation of the Virgin Mary to Saint Elizabeth (Luke 1:39–56).",
          "description": ""
        },
        {
          "title": "The Birth of the Child Jesus (Luke 2:1–20).",
          "description": ""
        },
        {
          "title": "The Presentation of the Child Jesus in the Temple (Luke 2:22–40).",
          "description": ""
        },
        {
          "title": "The Child Jesus Lost and Found in the Temple (Luke 2:41–52).",
          "description": ""
        }
      ]
    },
    "dolorosos": {
      "name": "Sorrowful",
      "kind": "Sorrowful",
      "mysteries": [
        {
          "title": "The Prayer of Jesus in the Garden (Mark 14:22–42).",
          "description": ""
        },
        {
          "title": "The Scourging of Our Lord Jesus Christ (Mark 15:1–15).",
          "description": ""
        },
        {
          "title": "Jesus Is Crowned with Thorns (Mark 15:16–20).",
          "description": ""
        },
        {
          "title": "Jesus Carries His Cross (Mark 15:21–28).",
          "description": ""
        },
        {
          "title": "The Crucifixion and Death of Our Lord Jesus Christ (Mark 15:29–39).",
          "description": ""
        }
      ]
    },
    "gloriosos": {
      "name": "Glorious",
      "kind": "Glorious",
      "mysteries": [
        {
          "title": "The Resurrection of the Son of God (Matthew 28:1–8).",
          "description": ""
        },
        {
          "title": "The Ascension of the Son of God (Acts 1:6–11).",
          "description": ""
        },
        {
          "title": "The Descent of the Holy Spirit upon the Apostles (Acts 2:1–13).",
          "description": ""
        },
        {
          "title": "The Assumption of Mary (Revelation 12:1).",
          "description": ""
        },
        {
          "title": "The Coronation of Our Lady as Queen of Heaven and Earth (Luke 1:46–50).",
          "description": ""
        }
      ]
    },
    "luminosos": {
      "name": "Luminous",
      "kind": "Luminous",
      "mysteries": [
        {
          "title": "The Baptism of Jesus in the Jordan (Matthew 3:13–17).",
          "description": ""
        },
        {
          "title": "Jesus Reveals Himself at the Wedding at Cana (John 2:1–12).",
          "description": ""
        },
        {
          "title": "Jesus Proclaims the Kingdom of God and Calls Us to Conversion (Mark 1:15).",
          "description": ""
        },
        {
          "title": "The Transfiguration of Jesus (Luke 9:35).",
          "description": ""
        },
        {
          "title": "The Institution of the Eucharist, the Sacramental Expression of the Paschal Mystery (John 13:1).",
          "description": ""
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
