import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Lightbulb, CheckCircle2, Mail, Database, Zap, Briefcase, TrendingUp } from 'lucide-react';
import Footer from '@/components/Footer';
import { MotionContainer, PageTransition, HoverScale } from '@/components/MotionContainer';

export default function UseCases() {
  const scenarios = [
    {
      icon: <Mail className="w-6 h-6 text-orange-500" />,
      title: '自動化郵件工作流程',
      description: '自動處理進入的郵件，分類、轉發或建立任務。',
      tasks: [
        '建立流程：當收到特定寄件者的郵件時，自動轉發給相應部門',
        '自動建立任務：將重要郵件轉換為 Teams 任務',
        '自動回覆：發送自動確認郵件給客戶',
        '資料提取：從郵件中提取資訊並儲存到 Excel'
      ],
    },
    {
      icon: <Database className="w-6 h-6 text-blue-500" />,
      title: '資料同步和備份',
      description: '自動同步不同應用程式之間的資料，確保資訊一致。',
      tasks: [
        '建立流程：當 SharePoint 檔案更新時，自動備份到 OneDrive',
        '資料轉移：自動將 Excel 資料複製到 SQL 資料庫',
        '定期報告：每週自動生成資料摘要報告',
        '資料驗證：檢查資料完整性並發送警報'
      ],
    },
    {
      icon: <Zap className="w-6 h-6 text-green-500" />,
      title: '自動化業務流程',
      description: '簡化複雜的業務流程，減少手動操作。',
      tasks: [
        '建立流程：自動化採購申請流程，包括批准和通知',
        '工作流程管理：自動將任務路由給相應的批准者',
        '進度追蹤：自動更新流程狀態並發送提醒',
        '異常處理：當流程出現異常時自動通知管理員'
      ],
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-purple-500" />,
      title: '報表和分析自動化',
      description: '自動生成報表和分析，節省時間並提高準確性。',
      tasks: [
        '建立流程：每週自動生成銷售報表並發送給管理層',
        '資料聚合：從多個來源收集資料並整合到一個報表',
        '自動警報：當關鍵指標超過閾值時發送警報',
        '視覺化：自動建立圖表和儀表板'
      ],
    },
    {
      icon: <Briefcase className="w-6 h-6 text-indigo-500" />,
      title: '客戶服務自動化',
      description: '改進客戶服務流程，提高回應速度和滿意度。',
      tasks: [
        '建立流程：自動分類客戶票證並分配給相應的團隊',
        '自動回覆：發送確認郵件給客戶',
        '進度通知：定期向客戶發送進度更新',
        '反饋收集：自動發送滿意度調查'
      ],
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-cyan-500" />,
      title: '人力資源流程自動化',
      description: '簡化招聘、入職和員工管理流程。',
      tasks: [
        '建立流程：自動化招聘流程，從發布職位到錄用通知',
        '入職自動化：自動建立新員工帳戶和發送歡迎資訊',
        '假期管理：自動處理假期申請和批准',
        '績效追蹤：自動提醒進行績效評估'
      ],
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        
        {/* Header */}
        <div className="bg-primary/5 border-b border-border py-16">
          <div className="container">
            <MotionContainer direction="up">
              <h1 className="text-4xl font-bold text-foreground mb-4">Power Automate 實務應用場景</h1>
              <p className="text-lg text-muted-foreground">
                探索 Power Automate 在不同行業和部門中的實際應用，找到最適合您的自動化方案。
              </p>
            </MotionContainer>
          </div>
        </div>

        {/* Main Content */}
        <div className="container py-20">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {scenarios.map((scenario, idx) => (
                <MotionContainer key={idx} direction="up" delay={idx * 0.1}>
                  <HoverScale>
                    <Card className="border-border bg-card h-full hover:shadow-lg transition-shadow overflow-hidden">
                      <CardHeader className="bg-muted/50 border-b border-border pb-6">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-background rounded-xl shadow-sm">
                            {scenario.icon}
                          </div>
                          <CardTitle className="text-lg text-card-foreground">{scenario.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <p className="text-sm text-muted-foreground mb-6">
                          {scenario.description}
                        </p>
                        <div className="space-y-2">
                          <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                            實現方式：
                          </p>
                          {scenario.tasks.map((task, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs">
                              <span className="text-primary mt-1">•</span>
                              <span className="text-muted-foreground">{task}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </HoverScale>
                </MotionContainer>
              ))}
            </div>

            {/* Benefits Section */}
            <MotionContainer direction="up">
              <section className="mb-20">
                <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
                  為什麼選擇 Power Automate？
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: '節省時間',
                      desc: '自動化重複性工作，每週可節省數小時。',
                      icon: '⏱️'
                    },
                    {
                      title: '降低成本',
                      desc: '減少手動操作，降低人力成本和錯誤率。',
                      icon: '💰'
                    },
                    {
                      title: '提高效率',
                      desc: '流程更快、更準確，提高整體工作效率。',
                      icon: '⚡'
                    },
                    {
                      title: '改進品質',
                      desc: '自動化流程更一致，減少人為錯誤。',
                      icon: '✓'
                    },
                    {
                      title: '可擴展性',
                      desc: '輕鬆擴展自動化流程到整個組織。',
                      icon: '📈'
                    },
                    {
                      title: '實時洞察',
                      desc: '獲得流程執行的實時資訊和分析。',
                      icon: '📊'
                    }
                  ].map((benefit, idx) => (
                    <MotionContainer key={idx} direction="up" delay={idx * 0.05}>
                      <HoverScale>
                        <Card className="border-border bg-card text-center">
                          <CardContent className="pt-6">
                            <div className="text-3xl mb-3">{benefit.icon}</div>
                            <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                            <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                          </CardContent>
                        </Card>
                      </HoverScale>
                    </MotionContainer>
                  ))}
                </div>
              </section>
            </MotionContainer>

            {/* Best Practices */}
            <MotionContainer direction="up">
              <section className="mb-20 bg-primary/10 border-l-4 border-primary p-8 rounded-r-lg">
                <div className="flex gap-4">
                  <Lightbulb className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-bold text-lg text-foreground mb-4">💡 實施 Power Automate 的最佳實踐</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• <strong className="text-foreground">從小開始：</strong>選擇一個簡單的流程開始，然後逐步擴展</li>
                      <li>• <strong className="text-foreground">定義清晰的目標：</strong>明確您想要自動化的流程和預期結果</li>
                      <li>• <strong className="text-foreground">測試充分：</strong>在生產環境中部署前進行充分測試</li>
                      <li>• <strong className="text-foreground">監控和優化：</strong>定期檢查流程效能並進行改進</li>
                      <li>• <strong className="text-foreground">培訓團隊：</strong>確保團隊了解新的自動化流程</li>
                    </ul>
                  </div>
                </div>
              </section>
            </MotionContainer>

            {/* CTA */}
            <MotionContainer direction="up">
              <div className="text-center py-12 border-t border-border">
                <h3 className="text-xl font-bold mb-6 text-foreground">準備好開始您的自動化之旅了嗎？</h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/basics/what-is-automate">
                    <HoverScale>
                      <Button size="lg" className="px-10 text-primary-foreground gap-2">
                        了解 Power Automate <ArrowRight className="w-4 h-4" />
                      </Button>
                    </HoverScale>
                  </Link>
                  <Link href="/tutorials/operation-guide">
                    <HoverScale>
                      <Button size="lg" variant="outline" className="px-10 bg-background text-foreground hover:bg-muted">
                        查看操作指南
                      </Button>
                    </HoverScale>
                  </Link>
                </div>
              </div>
            </MotionContainer>

          </div>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
}
