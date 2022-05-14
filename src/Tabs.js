import { useState } from 'react'
import Cryptoform from './components/Cryptoform'
import './Tabs.css'


export default function Tabs()
{
    const [tab, setTab] = useState(1)

    const handleTab = (tab) =>
    { 
        setTab(tab)
    }
  return (
      <div className='Tabs'>
          <div className='all-tabs'>
              <div className={tab === 1 ?'tab active': 'tab'} onClick={() => handleTab(1)}>
                  Crypto
              </div>
              <div className={tab === 2 ?'tab active': 'tab'} onClick={() => handleTab(2)}>
                  Fiat
              </div>
                  <div className={tab === 3 ?'tab active': 'tab'} onClick={() => handleTab(3)}>
                  Giftcard
              </div>
        </div>
          <div className='all-contents'>
          <div className={tab === 1 ?'content active': 'content'} onClick={() => handleTab(1)} >
                  <div className='content-header'>
                  <h1>Crypto</h1>
                  <hr />
                  </div>
                
                  <form>
                  <Cryptoform/>
                  </form>
              </div>
              <div className={tab === 2 ?'content active': 'content'} onClick={() => handleTab(2)} >
              <div className='content-header'>
                  <h1>Fiat</h1>
                  <hr />
                  </div>
                  <p>
                  Quis donec felis facilisi porttitor sed euismod velit turpis. Enim vitae ac sed porta justo, leo fringilla fermentum quis. Orci tincidunt venenatis tincidunt neque, morbi amet. Venenatis lectus pulvinar pulvinar phasellus nunc diam, congue commodo lobortis. Metus tortor consequat gravida sodales commodo odio nulla suspendisse.
Placerat at erat auctor adipiscing diam urna. Eu at malesuada at id nec. Turpis vulputate in nunc maecenas vestibulum facilisis. Eu sed congue hendrerit egestas magna lectus 
                  </p>
              </div>
              <div className={tab === 3 ?'content active': 'content'} onClick={() => handleTab(3)} >
              <div className='content-header'>
                  <h1>Giftcard</h1>
                  <hr />
                  </div>
                  <p>
                  Risus sit et senectus sed pharetra consectetur et. Porttitor bibendum volutpat quis nibh. Vel mi in congue a quisque. Semper leo pulvinar id lorem massa ut. Nunc velit vel dictumst duis eget pharetra nulla. Bibendum sed lacus dignissim semper elit posuere purus. Feugiat etiam molestie risus sed nunc duis interdum. Varius nibh sagittis velit molestie at magnis id.
                    </p>
              </div>
        </div>
    </div>
  )
}
