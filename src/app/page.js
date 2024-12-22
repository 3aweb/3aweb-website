import Image from 'next/image'
import { Button } from '@/components/ui/buttons'
import { TelegramIcon } from '@/components/icons'
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

        <div className={'HomePage__Title'}>3AWeb</div>

        <div className={'HomePage__Projects'}>
          <Button
            href={'https://t.me/blog_3aweb'}
            target={'_blank'}
            rel={'noopener noreferrer'}
          >
            <TelegramIcon/>
            <span>TG Канал</span>
          </Button>

          <Button
            href={'https://t.me/chat_3aweb'}
            target={'_blank'}
            rel={'noopener noreferrer'}
          >
            <TelegramIcon/>
            <span>Техночат</span>
          </Button>

          <Button
            href={'https://t.me/Pixel_Gem_Bot'}
            target={'_blank'}
            rel={'noopener noreferrer'}
          >
            <TelegramIcon/>
            <span>Pixel Gem Bot</span>
          </Button>

          {/*<div>Техночат</div>*/}
          {/*<div>Pixel Gem Bot</div>*/}
          {/*<div>Про нейросети</div>*/}
          {/*<div>Диван эксперт</div>*/}
        </div>
      </main>


      <div className={'HomePage__Background'}></div>
      <div className={'HomePage__Vignette'}></div>
    </div>
  )
}
