import Image from 'next/image'
import './HomePage.scss'

export default function Home() {
  return (
    <div className={'HomePage'}>


      <main className={'HomePage__ContentContainer'}>
        <div className={'HomePage__LogoContainer'}>
          <Image
            className={'HomePage__Logo'}
            src={'/images/logo.svg'}
            alt={'3aweb logo'}
            width={400}
            height={400}
          />
        </div>

        <div>3aweb</div>

        <div>
          <div>TG Канал</div>
          <div>Техночат</div>
          <div>Pixel Gem Bot</div>
          <div>Про нейросети</div>
          <div>Диван эксперт</div>
        </div>
      </main>


      <div className={'HomePage__Background'}></div>
    </div>
  )
}
