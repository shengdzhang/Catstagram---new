Comment.create!([
  {body: "something", author_id: 2, commentable_id: 1, commentable_type: "Medium"},
  {body: "Something else", author_id: 1, commentable_id: 1, commentable_type: "Medium"},
  {body: "Hello", author_id: 1, commentable_id: 1, commentable_type: "Comment"},
  {body: "next", author_id: 1, commentable_id: 1, commentable_type: "Comment"}
])
Follow.create!([
  {followee_id: 1, follower_id: 2},
  {followee_id: 3, follower_id: 1}
])
Like.create!([
  {media_id: 1, user_id: 2}
])
Medium.create!([
  {title: "adorable", description: nil, author_id: 1, link: "https://res.cloudinary.com/catstagram/image/upload/v1445827856/lsyohhg2kjlma6afgckt.jpg"},
  {title: "Persian2", description: "hello persians", author_id: 2, link: "https://res.cloudinary.com/catstagram/image/upload/v1445830319/peuoaxaiw4fe1shawbdh.jpg"},
  {title: "Persian 3", description: nil, author_id: 2, link: "https://res.cloudinary.com/catstagram/image/upload/v1445830351/vmji3yq7pxuke1hpg1fm.jpg"},
  {title: "angry persian", description: nil, author_id: 2, link: "https://res.cloudinary.com/catstagram/image/upload/v1445830373/ptwydvtuf0ttkzjkgida.jpg"},
  {title: "Persian 5", description: nil, author_id: 2, link: "https://res.cloudinary.com/catstagram/image/upload/v1445830428/ij7quytpf48oj8oigf6u.jpg"},
  {title: "Persian 6", description: nil, author_id: 2, link: "https://res.cloudinary.com/catstagram/image/upload/v1445830474/l8sk2rcfus3n5x6fkoqj.jpg"},
  {title: "persian", description: "my persian wersian", author_id: 2, link: "https://res.cloudinary.com/catstagram/image/upload/v1445830280/mu7uoncqbalwazteb18r.jpg"}
])
User.create!([
  {username: "Grumpy Cat", password_digest: "$2a$10$Hh1D3Va6Y6atAuVG6JAV5eoQ8syDX0B5IF2yQ2KGHIahfRFmFcPRK", session_token: "N950G9F_tBngkJ2Yg3pkNg", link: "https://res.cloudinary.com/catstagram/image/upload/v1445826386/article-2725981-208D631000000578-768_634x441_eqblao.jpg", description: nil},
  {username: "Happy Cat", password_digest: "$2a$10$/y16lmyLD/DM4AsWlUH0Z.4xXtMqrYsYUOidkGQSGr1BZEr11r7DG", session_token: "cswUfhA6vfYnh5kma_hEgw", link: "https://res.cloudinary.com/catstagram/image/upload/v1445819285/y7ceqksdsd4ijux2fjms.jpg", description: nil},
  {username: "300Spartans", password_digest: "$2a$10$5YBaLtVY1w0Ka8eW0aEcP.guP5UIHB.gMCYOCIDB0/llX3Fz672/G", session_token: "ArWrBHPtAn5sRU8jT_8jhA", link: "https://res.cloudinary.com/catstagram/image/upload/v1445447801/orxj7vzp58ufrhk441xy.jpg", description: nil},
  {username: "I like cats", password_digest: "$2a$10$9h1SH.PFK9qir.Qw1v12ke0t0.HwBikzScx83AykSWe0b6rdOops2", session_token: "BLTnVwimYrTxGLdTs86IIA", link: "https://res.cloudinary.com/catstagram/image/upload/v1445387644/alnerravmz7ar1eithcu.jpg", description: nil},
  {username: "Catwoman", password_digest: "$2a$10$zo7jbqru.1cNN6Dw14rerehO1a7xY1bWBcwBWoxPQ2eKhC.besyCG", session_token: "fOJPghHhP5dcc2q8wdwTkw", link: "https://res.cloudinary.com/catstagram/image/upload/v1445373988/fqnerth2zizjcfb2xnll.jpg", description: nil},
  {username: "MeowBowWow", password_digest: "$2a$10$AQ3g8EP/G4ItQnLa5lo89udWyrtCo2R9c8/lQhR5rydf3j9BQu8.q", session_token: "1SepDfR6NjvAjwzQv3LVAg", link: "https://res.cloudinary.com/catstagram/image/upload/v1445387567/ykw5tko2yyc4ogst8nvz.jpg", description: nil},
  {username: "Chipotle", password_digest: "$2a$10$yB28XE6yfFU5xhD3aanrlO7f.5VwRaHTEE6Xdt6XIpS6KG7UY40py", session_token: "j2riw0PWR4EtPGYXovn0bw", link: "https://res.cloudinary.com/catstagram/image/upload/v1445827256/oc5wvgwf3yrwy4qisimp.jpg", description: nil},
  {username: "Guest", password_digest: "$2a$10$5dLGfg35x/aLBLQuLtCAu.Tig2xURZeDhm62rvcgTp61l92pMF9/W", session_token: "MkdER0XUQfvF1KWL7GNsLA", link: "http://res.cloudinary.com/catstagram/image/upload/v1445632575/Anonymous_denjpa.png", description: nil},
  {username: "Tacos", password_digest: "$2a$10$.rjweyqIYaDGNqBcKBDXZemDO9IHEWYfzmVT8XfcxGAUABDj7bFZq", session_token: "kiKi3ao_bLq2DBn1my6i5w", link: "http://res.cloudinary.com/catstagram/image/upload/v1445040270/rdkwsqp9szc4slm6g1yl.jpg", description: nil}
])
