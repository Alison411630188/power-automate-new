import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BookOpen, Users, Zap, Cpu, Cloud } from 'lucide-react';
import Footer from '@/components/Footer';
import { MotionContainer, PageTransition, HoverScale } from '@/components/MotionContainer';

const HERO_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663446932732/47KbkvpLmL9hw6oikty2zt/hero-background-f72QBXASMByD6dkQHLkYv3.webp';
const LEARNING_PATH_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663446932732/47KbkvpLmL9hw6oikty2zt/learning-path-XqbuTSKxSYNunr7DGZ28Xu.webp';
const M365_ECOSYSTEM_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663446932732/47KbkvpLmL9hw6oikty2zt/m365-ecosystem-8PZToEcywNW7afX9YcAkhW.webp';

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        
        {/* Hero Section */}
        <section
          className="relative min-h-[600px] flex items-center justify-center text-center py-20 overflow-hidden"
          style={{
            backgroundImage: `url(${HERO_BG})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px]"></div>
          <div className="relative z-10 container max-w-3xl px-4">
            <MotionContainer direction="up" delay={0.1}>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                讓自動化變得簡單、強大且高效
              </h1>
            </MotionContainer>
            <MotionContainer direction="up" delay={0.2}>
              <p className="text-xl text-muted-foreground mb-8">
                專為企業新手設計的 Microsoft Power Automate 完整指南。從簡單的流程到複雜的自動化，一站式掌握所有技巧。
              </p>
            </MotionContainer>
            <MotionContainer direction="up" delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/basics/what-is-automate">
                  <HoverScale>
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                      立即開始
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </HoverScale>
                </Link>
                <Link href="/tutorials/operation-guide">
                  <HoverScale>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto bg-background">
                      查看操作指南
                    </Button>
                  </HoverScale>
                </Link>
              </div>
            </MotionContainer>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container">
            <MotionContainer direction="up">
              <h2 className="text-3xl font-bold text-center mb-12">
                為什麼選擇 Power Automate？
              </h2>
            </MotionContainer>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <Zap className="w-6 h-6 text-primary" />, title: '釋放生產力', desc: '自動化重複性工作，讓團隊專注於更有價值的任務' },
                { icon: <Cloud className="w-6 h-6 text-primary" />, title: '無縫整合', desc: '連接您最喜愛的應用程式，實現工作流程自動化' },
                { icon: <BookOpen className="w-6 h-6 text-primary" />, title: '易於上手', desc: '無需程式背景，拖拉模組即可建立強大的自動化流程' }
              ].map((feature, idx) => (
                <MotionContainer key={idx} direction="up" delay={idx * 0.1}>
                  <HoverScale>
                    <Card className="border-border bg-card hover:shadow-lg transition h-full">
                      <CardHeader>
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                          {feature.icon}
                        </div>
                        <CardTitle className="text-card-foreground">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{feature.desc}</p>
                      </CardContent>
                    </Card>
                  </HoverScale>
                </MotionContainer>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Path Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <MotionContainer direction="left">
                <h2 className="text-3xl font-bold mb-6">
                  三階段學習路徑
                </h2>
                <div className="space-y-6">
                  {[
                    { step: 1, stage: '第一階段', title: '理解基礎', desc: 'Power Automate 是什麼、適合誰、與其他工具的差異', link: '/basics/what-is-automate', linkText: '前往入門指南' },
                    { step: 2, stage: '第二階段', title: '操作實踐', desc: '雲端流程與桌面流程的區別、建立您的第一個流程', link: '/tutorials/operation-guide', linkText: '前往操作指南' },
                    { step: 3, stage: '第三階段', title: '進階應用', desc: '複雜流程設計、最佳實踐、實務情境應用', link: '/support/faq', linkText: '前往常見問題' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground font-bold">
                          {item.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-primary">{item.stage}</p>
                        <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                        <Link href={item.link} className="text-xs text-primary hover:underline mt-2 inline-block font-semibold">
                          {item.linkText} →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </MotionContainer>
              <MotionContainer direction="right">
                <img src={LEARNING_PATH_IMG} alt="Learning Path" className="w-full rounded-lg shadow-lg opacity-90 dark:opacity-80 transition-opacity" />
              </MotionContainer>
            </div>
          </div>
        </section>

        {/* M365 Ecosystem Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <MotionContainer direction="left">
                <img src={M365_ECOSYSTEM_IMG} alt="M365 Ecosystem" className="w-full rounded-lg shadow-lg opacity-90 dark:opacity-80 transition-opacity" />
              </MotionContainer>
              <MotionContainer direction="right">
                <h2 className="text-3xl font-bold mb-6">
                  與 M365 完美整合
                </h2>
                <p className="text-muted-foreground mb-6">
                  Power Automate 是 Microsoft 365 生態系的核心。無論您使用 Teams、Outlook、SharePoint 還是 Excel，Power Automate 都能無縫協作。
                </p>
                <ul className="space-y-3">
                  {[
                    '在 Teams 頻道中自動化工作流程',
                    '將 Outlook 郵件轉換為自動化任務',
                    '自動備份和同步 SharePoint 資料',
                    '自動化 Excel 資料處理和報表生成'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </MotionContainer>
            </div>
          </div>
        </section>

        {/* FAQ Preview Section */}
        <section className="py-20">
          <div className="container">
            <MotionContainer direction="up">
              <h2 className="text-3xl font-bold text-center mb-12">
                常見問題快速回答
              </h2>
            </MotionContainer>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { q: 'Power Automate 需要程式背景嗎？', a: '完全不需要！Power Automate 使用拖拉介面，任何人都可以建立自動化流程。' },
                { q: '雲端流程和桌面流程有什麼區別？', a: '雲端流程連接應用程式和服務，桌面流程自動化桌面應用程式和舊版系統。' },
                { q: 'Power Automate 的成本是多少？', a: '多數企業可免費使用基本功能。進階功能需要付費授權。' },
                { q: '如何開始建立我的第一個流程？', a: '訪問 flow.microsoft.com，登入您的 Microsoft 帳戶，選擇流程類型並開始建立。' }
              ].map((faq, idx) => (
                <MotionContainer key={idx} direction="up" delay={idx * 0.1}>
                  <Card className="border-border bg-card">
                    <CardHeader>
                      <CardTitle className="text-base text-card-foreground">{faq.q}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{faq.a}</p>
                    </CardContent>
                  </Card>
                </MotionContainer>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/support/faq">
                <HoverScale>
                  <Button variant="outline" className="bg-background">
                    查看所有 FAQ
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </HoverScale>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground overflow-hidden">
          <div className="container text-center relative">
            <MotionContainer direction="up">
              <h2 className="text-3xl font-bold mb-6">
                準備好開始了嗎？
              </h2>
              <p className="text-lg mb-8 text-primary-foreground/90">
                只需 15 分鐘，您就能掌握 Power Automate 的基礎概念並建立您的第一個流程。
              </p>
              <Link href="/basics/what-is-automate">
                <HoverScale>
                  <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                    立即開始
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </HoverScale>
              </Link>
            </MotionContainer>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}
