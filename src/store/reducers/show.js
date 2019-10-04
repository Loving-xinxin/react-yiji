import { ADD_COMMENT } from '../actionTypes';
const initialState = {
  show: [
    {
      id: '1',
      img:
        'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-pic_01.png',
      last_day: 10,
      liked: 159,
      visited: 394,
      news: 9,
      type: 'now',
      info: {
        img:
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/personal-01_01.png',
        authorImg:
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-first_02.png',
        authorDetail:
          '肖全，男，1959年出生于四川成都，曾任深圳《街道》杂志摄影记者，被称为‘中国最好的人像摄影师’。1980年代中期开始“我们这一代”拍摄，1991年出版《天堂之鸟》三毛摄影专集，1992年在瑞士举办个展，1993年在法国参加摄影联赛，1997年出版《我们这一代人》。2000年出版《我镜头下的美丽女人》。',
        content:
          '本次展览将从人像摄影家肖全为杨丽萍拍摄的众多摄影中挑选出一组精品向观众展示。一个是舞之精灵，美的化身；一个被誉为中国最好的人像摄影家。两人的心灵碰撞，会擦出什么样的艺术火花？摄影师镜头下真实的杨丽萍是什么样的？25日开始的“心动”展，无疑极大地撩起了人们的好奇心。',
        pics: [
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-first_04.png',
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-first_06.png',
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-first_08.png'
        ],
        comment: [
          {
            userId: '1',
            id: 'f1',
            author: '阿德',
            avater:
              'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-avater_11.png',
            time: '2016.8.21',
            content: '挺好的，特别喜欢这种风格'
          },
          {
            userId: '1',
            id: 'f2',
            author: '阿德',
            avater:
              'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-avater_11.png',
            time: '2016.8.21',
            content: '杨丽萍，真美！'
          }
        ]
      }
    },
    {
      id: '2',
      img:
        'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-pic_03.png',
      last_day: 12,
      liked: 239,
      visited: 526,
      news: 52,
      type: 'now',
      info: {
        img:
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-pic_01.png',
        authorDetail:
          '肖全，男，1959年出生于四川成都，曾任深圳《街道》杂志摄影记者，被称为‘中国最好的人像摄影师’。1980年代中期开始“我们这一代”拍摄，1991年出版《天堂之鸟》三毛摄影专集，1992年在瑞士举办个展，1993年在法国参加摄影联赛，1997年出版《我们这一代人》。2000年出版《我镜头下的美丽女人》。',
        authorImg:
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-first_02.png',
        content:
          '本次展览将从人像摄影家肖全为杨丽萍拍摄的众多摄影中挑选出一组精品向观众展示。一个是舞之精灵，美的化身；一个被誉为中国最好的人像摄影家。两人的心灵碰撞，会擦出什么样的艺术火花？摄影师镜头下真实的杨丽萍是什么样的？25日开始的“心动”展，无疑极大地撩起了人们的好奇心。',
        pics: [
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-first_04.png',
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-first_06.png',
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-first_08.png'
        ],
        comment: [
          {
            userId: '2',
            id: 'f3',
            author: '阿德',
            avater:
              'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-avater_11.png',
            time: '2016.8.21',
            content: '挺好的，特别喜欢这种风格'
          },
          {
            userId: '2',
            id: 'f4',
            author: '阿德',
            avater:
              'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-avater_11.png',
            time: '2016.8.21',
            content: '杨丽萍，真美！'
          }
        ]
      }
    },
    {
      id: '3',
      img:
        'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-pic_05.png',
      last_day: 8,
      liked: 319,
      visited: 226,
      news: 39,
      type: 'now',
      info: {
        img:
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-pic_01.png',
        authorImg:
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-first_02.png',
        content:
          '本次展览将从人像摄影家肖全为杨丽萍拍摄的众多摄影中挑选出一组精品向观众展示。一个是舞之精灵，美的化身；一个被誉为中国最好的人像摄影家。两人的心灵碰撞，会擦出什么样的艺术火花？摄影师镜头下真实的杨丽萍是什么样的？25日开始的“心动”展，无疑极大地撩起了人们的好奇心。',
        pics: [
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-first_04.png',
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-first_06.png',
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-first_08.png'
        ],
        comment: [
          {
            userId: '3',
            id: 'f5',
            author: '阿德',
            avater:
              'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-avater_11.png',
            time: '2016.8.21',
            content: '挺好的，特别喜欢这种风格'
          },
          {
            userId: '3',
            id: 'f6',
            author: '阿德',
            avater:
              'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-avater_11.png',
            time: '2016.8.21',
            content: '杨丽萍，真美！'
          }
        ]
      }
    },
    {
      id: '4',
      img:
        'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-pic_07.png',
      last_day: 2,
      liked: 42,
      visited: 109,
      news: 1,
      type: 'now',
      info: {
        img:
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-pic_01.png',
        content:
          '本次展览将从人像摄影家肖全为杨丽萍拍摄的众多摄影中挑选出一组精品向观众展示。一个是舞之精灵，美的化身；一个被誉为中国最好的人像摄影家。两人的心灵碰撞，会擦出什么样的艺术火花？摄影师镜头下真实的杨丽萍是什么样的？25日开始的“心动”展，无疑极大地撩起了人们的好奇心。',
        pics: [
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-first_04.png',
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-first_06.png',
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-first_08.png'
        ],
        comment: [
          {
            userId: '4',
            id: 'f7',
            author: '阿德',
            avater:
              'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-avater_11.png',
            time: '2016.8.21',
            content: '挺好的，特别喜欢这种风格'
          },
          {
            userId: '4',
            id: 'f8',
            author: '阿德',
            avater:
              'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-avater_11.png',
            time: '2016.8.21',
            content: '杨丽萍，真美！'
          }
        ]
      }
    },
    {
      id: '5',
      img:
        'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-pic_09.png',
      last_day: 14,
      liked: 12,
      visited: 19,
      news: 5,
      type: 'now',
      info: {
        img:
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-pic_01.png',
        content:
          '本次展览将从人像摄影家肖全为杨丽萍拍摄的众多摄影中挑选出一组精品向观众展示。一个是舞之精灵，美的化身；一个被誉为中国最好的人像摄影家。两人的心灵碰撞，会擦出什么样的艺术火花？摄影师镜头下真实的杨丽萍是什么样的？25日开始的“心动”展，无疑极大地撩起了人们的好奇心。',
        pics: [
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-first_04.png',
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-first_06.png',
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-first_08.png'
        ],
        comment: [
          {
            userId: '5',
            id: 'f9',
            author: '阿德',
            avater:
              'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-avater_11.png',
            time: '2016.8.21',
            content: '挺好的，特别喜欢这种风格'
          },
          {
            userId: '5',
            id: 'f10',
            author: '阿德',
            avater:
              'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-avater_11.png',
            time: '2016.8.21',
            content: '杨丽萍，真美！'
          }
        ]
      }
    },
    {
      id: 'a1',
      img:
        'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/tuijian-pic_01.png',
      last_day: 60,
      liked: 821,
      visited: '1.3K',
      news: 56,
      type: 'will',
      info: {
        img:
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-pic_01.png',
        content:
          '本次展览将从人像摄影家肖全为杨丽萍拍摄的众多摄影中挑选出一组精品向观众展示。一个是舞之精灵，美的化身；一个被誉为中国最好的人像摄影家。两人的心灵碰撞，会擦出什么样的艺术火花？摄影师镜头下真实的杨丽萍是什么样的？25日开始的“心动”展，无疑极大地撩起了人们的好奇心。',
        pics: [
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-first_04.png',
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-first_06.png',
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-first_08.png'
        ],
        comment: [
          {
            userId: 'a1',
            id: 'f11',
            author: '阿德',
            avater:
              'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-avater_11.png',
            time: '2016.8.21',
            content: '挺好的，特别喜欢这种风格'
          },
          {
            userId: 'a2',
            id: 'f12',
            author: '阿德',
            avater:
              'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-avater_11.png',
            time: '2016.8.21',
            content: '杨丽萍，真美！'
          }
        ]
      }
    },
    {
      id: 'a2',
      img:
        'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/tuijian-pic_03.png',
      last_day: 90,
      liked: 151,
      visited: '1.1K',
      news: 123,
      type: 'will ',
      info: {
        img:
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-pic_01.png',
        content:
          '本次展览将从人像摄影家肖全为杨丽萍拍摄的众多摄影中挑选出一组精品向观众展示。一个是舞之精灵，美的化身；一个被誉为中国最好的人像摄影家。两人的心灵碰撞，会擦出什么样的艺术火花？摄影师镜头下真实的杨丽萍是什么样的？25日开始的“心动”展，无疑极大地撩起了人们的好奇心。',
        pics: [
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-first_04.png',
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-first_06.png',
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-first_08.png'
        ],
        comment: [
          {
            userId: 'a2',
            id: 'f13',
            author: '阿德',
            avater:
              'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-avater_11.png',
            time: '2016.8.21',
            content: '挺好的，特别喜欢这种风格'
          },
          {
            userId: 'a2',
            id: 'f14',
            author: '阿德',
            avater:
              'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-avater_11.png',
            time: '2016.8.21',
            content: '杨丽萍，真美！'
          }
        ]
      }
    },
    {
      id: 'a3',
      img:
        'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/tuijian-pic_05.png',
      last_day: 119,
      liked: '1.1k',
      visited: '2.3k',
      news: 401,
      type: 'will',
      info: {
        img:
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-pic_01.png',
        content:
          '本次展览将从人像摄影家肖全为杨丽萍拍摄的众多摄影中挑选出一组精品向观众展示。一个是舞之精灵，美的化身；一个被誉为中国最好的人像摄影家。两人的心灵碰撞，会擦出什么样的艺术火花？摄影师镜头下真实的杨丽萍是什么样的？25日开始的“心动”展，无疑极大地撩起了人们的好奇心。',
        pics: [
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-first_04.png',
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-first_06.png',
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-first_08.png'
        ],
        comment: [
          {
            userId: 'a3',
            id: 'f15',
            author: '阿德',
            avater:
              'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-avater_11.png',
            time: '2016.8.21',
            content: '挺好的，特别喜欢这种风格'
          },
          {
            userId: 'a3',
            id: 'f16',
            author: '阿德',
            avater:
              'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-avater_11.png',
            time: '2016.8.21',
            content: '杨丽萍，真美！'
          }
        ]
      }
    },
    {
      id: 'a4',
      img:
        'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/tuijian-pic_07.png',
      last_day: 49,
      liked: 159,
      visited: 394,
      news: 9,
      type: 'will',
      info: {
        img:
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-pic_01.png',
        content:
          '本次展览将从人像摄影家肖全为杨丽萍拍摄的众多摄影中挑选出一组精品向观众展示。一个是舞之精灵，美的化身；一个被誉为中国最好的人像摄影家。两人的心灵碰撞，会擦出什么样的艺术火花？摄影师镜头下真实的杨丽萍是什么样的？25日开始的“心动”展，无疑极大地撩起了人们的好奇心。',
        pics: [
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-first_04.png',
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-first_06.png',
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-first_08.png'
        ],
        comment: [
          {
            userId: 'a4',
            id: 'f17',
            author: '阿德',
            avater:
              'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-avater_11.png',
            time: '2016.8.21',
            content: '挺好的，特别喜欢这种风格'
          },
          {
            userId: 'a4',
            id: 'f18',
            author: '阿德',
            avater:
              'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-avater_11.png',
            time: '2016.8.21',
            content: '杨丽萍，真美！'
          }
        ]
      }
    },
    {
      id: 'a5',
      img:
        'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/tuijian-pic_09.png',
      last_day: 140,
      liked: 9,
      visited: 194,
      news: 5,
      type: 'will',
      info: {
        img:
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-pic_01.png',
        content:
          '本次展览将从人像摄影家肖全为杨丽萍拍摄的众多摄影中挑选出一组精品向观众展示。一个是舞之精灵，美的化身；一个被誉为中国最好的人像摄影家。两人的心灵碰撞，会擦出什么样的艺术火花？摄影师镜头下真实的杨丽萍是什么样的？25日开始的“心动”展，无疑极大地撩起了人们的好奇心。',
        pics: [
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-first_04.png',
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-first_06.png',
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-first_08.png'
        ],
        comment: [
          {
            userId: 'a5',
            id: 'f19',
            author: '阿德',
            avater:
              'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-avater_11.png',
            time: '2016.8.21',
            content: '挺好的，特别喜欢这种风格'
          },
          {
            userId: 'a5',
            id: 'f20',
            author: '阿德',
            avater:
              'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-avater_11.png',
            time: '2016.8.21',
            content: '杨丽萍，真美！'
          }
        ]
      }
    },
    {
      id: 'a6',
      img:
        'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/tuijian-pic_11.png',
      last_day: 14,
      liked: 12,
      visited: 19,
      news: 5,
      type: 'will',
      info: {
        img:
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-pic_01.png',
        content:
          '本次展览将从人像摄影家肖全为杨丽萍拍摄的众多摄影中挑选出一组精品向观众展示。一个是舞之精灵，美的化身；一个被誉为中国最好的人像摄影家。两人的心灵碰撞，会擦出什么样的艺术火花？摄影师镜头下真实的杨丽萍是什么样的？25日开始的“心动”展，无疑极大地撩起了人们的好奇心。',
        pics: [
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-first_04.png',
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-first_06.png',
          'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-first_08.png'
        ],
        comment: [
          {
            userId: 'a6',
            id: 'f21',
            author: '阿德',
            avater:
              'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-avater_11.png',
            time: '2016.8.21',
            content: '挺好的，特别喜欢这种风格'
          },
          {
            userId: 'a6',
            id: 'f22',
            author: '阿德',
            avater:
              'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-avater_11.png',
            time: '2016.8.21',
            content: '杨丽萍，真美！'
          }
        ]
      }
    }
  ]
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case ADD_COMMENT:
      console.log(newState.show);
      console.log(action);
      newState.show
        .find(ele => ele.id === action.payload.newComment.userId)
        .info.comment.push(action.payload.newComment);
      action.payload.clear();
      action.payload.back();
      return newState;
    default:
      return state;
  }
};
