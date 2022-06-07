import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Days Since Last CSO Mole Attack: <code>pages/index.js</code>
        </p>
    
    
        <script type = "text/javascript" >
        // JavaScript program to illustrate 
        // calculation of no. of days between two date 
  
        // To set two dates to two variables
        var date1 = new Date("06/07/2022");
        var date2 = new Date("06/07/2022");
  
        // To calculate the time difference of two dates
        var Difference_In_Time = date2.getTime() - date1.getTime();
  
        // To calculate the no. of days between two dates
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  
        //To display the final no. of days (result)
        document.write(Difference_In_Days);
  
        </script>
      </main>

      <Footer />
    </div>
  )
}
