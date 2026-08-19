import Section1 from './Components/Section1/Section1'
import Section2 from './Components/section2/section2'

const users=[
  { 
    img:'https://images.unsplash.com/photo-1714976326829-b97d2908b385?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzJTIwc2luZ2xlJTIwcGVyc29ufGVufDB8fDB8fHww',
    intro:'',
    tag:'Satisfied'
  },

  { img:'https://media.istockphoto.com/id/2200121964/photo/thoughtful-creative-man-working-on-laptop-in-the-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=W4Evvk4iRyNR41QEknxBBwU3z0NDOgeMGXlbhz20i00=',
    intro:'',
    tag:'UnderServed'
  },

  { img:'https://plus.unsplash.com/premium_photo-1663040007401-82d2dfdfdc35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzJTIwc2luZ2xlJTIwcGVyc29ufGVufDB8fDB8fHww',
    intro:'',
    tag:'UnderBanked'
  },

  { img:'https://plus.unsplash.com/premium_photo-1661768380995-f459ff60add6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzJTIwc2luZ2xlJTIwcGVyc29ufGVufDB8fDB8fHww',
    intro:'',
    tag:'OverAchiever'
  }
];

const App = () => {
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App
