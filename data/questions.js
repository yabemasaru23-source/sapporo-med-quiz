const QUESTIONS = {
  math: [
    {
      id: "m1",
      subject: "math",
      type: "choice",
      difficulty: "standard",
      category: "微分・積分",
      question: "関数 f(x) = x³ − 3x² + 2 について、極大値と極小値の差を求めよ。",
      choices: ["2", "4", "6", "8"],
      answer: 1,
      explanation: "f'(x) = 3x² − 6x = 3x(x−2) より x=0 で極大、x=2 で極小。\n極大値：f(0) = 2\n極小値：f(2) = 8−12+2 = −2\n差：2−(−2) = 4"
    },
    {
      id: "m2",
      subject: "math",
      type: "choice",
      difficulty: "standard",
      category: "確率",
      question: "赤玉4個、白玉3個が入った袋から、同時に3個取り出す。少なくとも1個が赤玉である確率を求めよ。",
      choices: ["31/35", "32/35", "33/35", "34/35"],
      answer: 3,
      explanation: "全体：₇C₃ = 35\n全て白玉：₃C₃ = 1\n少なくとも1個赤＝1 − (全て白)＝1 − 1/35 ＝ 34/35"
    },
    {
      id: "m3",
      subject: "math",
      type: "choice",
      difficulty: "hard",
      category: "数列",
      question: "初項1、公比rの等比数列の初項から第n項までの和が 2ⁿ − 1 であるとき、rの値を求めよ。",
      choices: ["r = 1", "r = 2", "r = 3", "r = 4"],
      answer: 1,
      explanation: "Sₙ = (1·(rⁿ−1))/(r−1) = 2ⁿ − 1\nr=2のとき：(2ⁿ−1)/(2−1) = 2ⁿ−1 ✓\nよって r = 2"
    },
    {
      id: "m4",
      subject: "math",
      type: "written",
      difficulty: "hard",
      category: "積分",
      question: "∫₀¹ x·eˣ dx を求めよ。（部分積分を用いること）",
      answer: "1",
      model_answer: "∫₀¹ x·eˣ dx\n= [x·eˣ]₀¹ − ∫₀¹ eˣ dx\n= (1·e¹ − 0) − [eˣ]₀¹\n= e − (e − 1)\n= 1",
      explanation: "部分積分の公式：∫u·v' dx = u·v − ∫u'·v dx\nu = x, v' = eˣ とおくと u' = 1, v = eˣ"
    },
    {
      id: "m5",
      subject: "math",
      type: "choice",
      difficulty: "standard",
      category: "ベクトル",
      question: "ベクトル $\\vec{a}=(2,1)$、$\\vec{b}=(1,3)$ のなす角 θ を求めよ。",
      choices: ["30°", "45°", "60°", "90°"],
      answer: 1,
      explanation: "cosθ = (a⃗·b⃗)/(|a⃗||b⃗|)\na⃗·b⃗ = 2×1 + 1×3 = 5\n|a⃗| = √5, |b⃗| = √10\ncosθ = 5/(√5·√10) = 5/√50 = 5/(5√2) = 1/√2\nθ = 45°"
    },
    {
      id: "m6",
      subject: "math",
      type: "choice",
      difficulty: "hard",
      category: "複素数",
      question: "複素数 z = 1+i のとき、z⁸ の値を求めよ。",
      choices: ["16", "-16", "16i", "-16i"],
      answer: 1,
      explanation: "|z| = √2, argz = π/4\nz = √2·(cos π/4 + i sin π/4)\nz⁸ = (√2)⁸·(cos 2π + i sin 2π)\n= 16·1 = 16"
    },
    {
      id: "m7",
      subject: "math",
      type: "written",
      difficulty: "hard",
      category: "微分方程式",
      question: "微分方程式 dy/dx = 2xy を解け。初期条件：x=0のとき y=3",
      answer: "y = 3e^(x²)",
      model_answer: "変数分離：dy/y = 2x dx\n両辺積分：ln|y| = x² + C\ny = Ae^(x²)\nx=0, y=3 より 3 = Ae⁰ = A\nよって y = 3e^(x²)",
      explanation: "変数分離法を使う。dy/y と 2x dx に分けて両辺を積分する。積分定数は初期条件で決定する。"
    },
    {
      id: "m8",
      subject: "math",
      type: "choice",
      difficulty: "standard",
      category: "場合の数",
      question: "1から9までの整数から異なる3つを選んで3桁の整数を作るとき、3の倍数は何個できるか。",
      choices: ["144", "162", "168", "180"],
      answer: 2,
      explanation: "3の倍数は各桁の数字の和が3の倍数のとき。\n{1-9}から3つ選び和が3の倍数になる組合せ：\n₉C₃=84通りのうち、和が3の倍数になるのは28通り。\n各組合せで並べ方は3!=6通り。\n28×6=168通り"
    }
  ],
  english: [
    {
      id: "e1",
      subject: "english",
      type: "choice",
      difficulty: "standard",
      category: "文法",
      question: "Choose the correct sentence:\n(A) She has been working here since five years.\n(B) She has been working here for five years.\n(C) She is working here since five years.\n(D) She worked here for five years ago.",
      choices: ["(A)", "(B)", "(C)", "(D)"],
      answer: 1,
      explanation: "「〜の間ずっと」は for + 期間。since + 時点（five years ago など）。\n現在完了進行形（has been working）は継続を表す。正解は (B)。"
    },
    {
      id: "e2",
      subject: "english",
      type: "choice",
      difficulty: "standard",
      category: "語彙",
      question: "The doctor said the patient's condition was ( ) and that he would recover soon.\n最も適切な語を選べ。",
      choices: ["fatal", "benign", "chronic", "acute"],
      answer: 1,
      explanation: "benign：（病状が）良性の、深刻でない\nfatal：致命的な\nchronic：慢性的な\nacute：急性の、激しい\n「すぐに回復する」という文脈からbenignが適切。"
    },
    {
      id: "e3",
      subject: "english",
      type: "choice",
      difficulty: "hard",
      category: "読解",
      question: "Read the passage and answer:\n\n\"Recent studies suggest that the gut microbiome plays a crucial role in mental health. The bacteria residing in our intestines produce neurotransmitters such as serotonin, which directly affect mood and cognitive function.\"\n\nWhat is the main point of this passage?",
      choices: [
        "Bacteria in the gut can cause mental illness",
        "The gut and brain are connected through bacteria and neurotransmitters",
        "Serotonin is only produced in the gut",
        "Mental health problems are caused by poor diet"
      ],
      answer: 1,
      explanation: "本文は「腸内細菌叢が精神的健康に重要な役割を果たす」→「腸内細菌がセロトニンなどの神経伝達物質を産生し気分・認知機能に影響する」という腸脳相関について述べている。正解は(B)。"
    },
    {
      id: "e4",
      subject: "english",
      type: "written",
      difficulty: "hard",
      category: "英作文",
      question: "次のテーマについて、60語程度の英語で書け。\n「医師になりたい理由（Why do you want to become a doctor?）」",
      answer: null,
      model_answer: "I want to become a doctor because I believe medicine is one of the most meaningful ways to help people. My grandmother's illness made me realize how much doctors can change lives. I want to combine scientific knowledge with compassionate care to support patients and their families during difficult times. Medicine is not just a career—it is a calling.",
      explanation: "採点ポイント：\n① 明確な理由が述べられているか（20点）\n② 文法・語法の正確さ（20点）\n③ 語彙の豊富さ・適切さ（20点）\n④ 構成の一貫性（20点）\n⑤ 指定語数を満たしているか（20点）"
    },
    {
      id: "e5",
      subject: "english",
      type: "choice",
      difficulty: "standard",
      category: "文法",
      question: "The experiment ( ) by the time the professor arrived at the lab.",
      choices: [
        "has completed",
        "had been completed",
        "was completing",
        "would complete"
      ],
      answer: 1,
      explanation: "過去のある時点（教授が到着した時）より前に完了していた動作→過去完了受動態 had been completed が正解。"
    },
    {
      id: "e6",
      subject: "english",
      type: "choice",
      difficulty: "hard",
      category: "読解",
      question: "\"The placebo effect demonstrates the powerful connection between the mind and body. Patients who believe they are receiving effective treatment often show measurable improvements, even when given inert substances.\"\n\nThe word 'inert' in this passage means:",
      choices: ["toxic", "expensive", "having no medical effect", "cutting-edge"],
      answer: 2,
      explanation: "inert = 不活性な、薬効のない。文脈から「何も入っていない物質」を指す。プラセボ（偽薬）の説明文なので、「薬効のない物質」が正解。"
    }
  ],
  science: [
    {
      id: "s1",
      subject: "science",
      type: "choice",
      difficulty: "standard",
      category: "生物・細胞",
      question: "次のうち、真核細胞にのみ存在する構造はどれか。",
      choices: ["細胞膜", "リボソーム", "核膜", "DNA"],
      answer: 2,
      explanation: "核膜（nuclear envelope）は真核細胞のみが持つ構造。原核細胞（細菌など）にはDNAはあるが、核膜で囲まれた核はない。細胞膜・リボソーム・DNAは原核・真核ともに存在する。"
    },
    {
      id: "s2",
      subject: "science",
      type: "choice",
      difficulty: "standard",
      category: "生物・遺伝",
      question: "ABO式血液型において、AB型の親とO型の親から生まれる子の血液型として起こり得ないものはどれか。",
      choices: ["A型", "B型", "AB型", "O型"],
      answer: 2,
      explanation: "AB型の遺伝子型：I^A I^B\nO型の遺伝子型：ii\n掛け合わせ：I^A i（A型）またはI^B i（B型）\n→ A型またはB型のみ生まれる。AB型・O型は生まれない。"
    },
    {
      id: "s3",
      subject: "science",
      type: "choice",
      difficulty: "hard",
      category: "化学・有機",
      question: "グルコース（C₆H₁₂O₆）が完全燃焼するときの化学反応式として正しいものはどれか。",
      choices: [
        "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O",
        "C₆H₁₂O₆ + 3O₂ → 6CO₂ + 6H₂O",
        "C₆H₁₂O₆ + 6O₂ → 6CO + 6H₂O",
        "C₆H₁₂O₆ → 6CO₂ + 6H₂"
      ],
      answer: 0,
      explanation: "炭素原子6個→6CO₂、水素原子12個→6H₂O\n酸素の収支：生成物で必要なO = 6×2+6×1=18個、グルコース内のO=6個\n不足O = 12個 → O₂ = 6分子\nC₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O"
    },
    {
      id: "s4",
      subject: "science",
      type: "choice",
      difficulty: "hard",
      category: "生物・免疫",
      question: "適応免疫（獲得免疫）において、抗体を産生するのはどの細胞か。",
      choices: ["T細胞", "マクロファージ", "B細胞（形質細胞）", "NK細胞"],
      answer: 2,
      explanation: "B細胞は抗原刺激を受けると形質細胞（plasma cell）に分化し、抗体（immunoglobulin）を大量に産生・分泌する。T細胞は細胞性免疫、マクロファージは貪食、NK細胞は自然免疫を担当。"
    },
    {
      id: "s5",
      subject: "science",
      type: "choice",
      difficulty: "standard",
      category: "化学・平衡",
      question: "ある温度でN₂ + 3H₂ ⇌ 2NH₃ の平衡定数K=1.0×10⁻³ のとき、圧力を増加させると平衡はどうなるか。",
      choices: [
        "右方向（NH₃生成）にシフトする",
        "左方向（N₂・H₂生成）にシフトする",
        "変化しない",
        "温度によって異なる"
      ],
      answer: 0,
      explanation: "ル・シャトリエの原理：圧力増加→気体分子数が減少する方向へ平衡がシフト。\n左辺：1+3=4mol、右辺：2mol\n圧力増加→分子数が少ない右側（NH₃生成）へシフト。"
    },
    {
      id: "s6",
      subject: "science",
      type: "written",
      difficulty: "hard",
      category: "生物・神経",
      question: "静止電位と活動電位のメカニズムについて、イオンの動きを中心に200字程度で説明せよ。",
      answer: null,
      model_answer: "静止電位（約−70mV）はK⁺が細胞外へ流出し、Na⁺が細胞外に多いことで生じる分極状態。刺激を受けるとNa⁺チャネルが開き、Na⁺が急速に細胞内へ流入して脱分極が起きる（活動電位のピーク：約+30mV）。続いてK⁺チャネルが開き、K⁺が細胞外へ流出して再分極する。その後Na⁺-K⁺ポンプが働き静止電位に戻る（過分極を経て）。",
      explanation: "採点ポイント：\n① 静止電位の値と原因イオン（K⁺の流出）\n② 活動電位：Na⁺流入→脱分極\n③ 再分極：K⁺流出\n④ Na⁺-K⁺ポンプの役割\n⑤ 用語の正確な使用"
    },
    {
      id: "s7",
      subject: "science",
      type: "choice",
      difficulty: "standard",
      category: "化学・酸塩基",
      question: "0.1mol/L塩酸100mLを完全に中和するために必要な0.1mol/L水酸化ナトリウム水溶液の体積はいくらか。",
      choices: ["50mL", "100mL", "150mL", "200mL"],
      answer: 1,
      explanation: "中和：HCl + NaOH → NaCl + H₂O\n塩酸のmol数：0.1×0.1L = 0.01mol\nNaOHのmol数も0.01mol必要\n体積：0.01mol ÷ 0.1mol/L = 0.1L = 100mL"
    },
    {
      id: "s8",
      subject: "science",
      type: "choice",
      difficulty: "hard",
      category: "生物・光合成",
      question: "カルビン・ベンソン回路（暗反応）において、CO₂が最初に固定される物質はどれか。",
      choices: ["グルコース", "ピルビン酸", "RuBP（リブロース1,5-ビスリン酸）", "ATP"],
      answer: 2,
      explanation: "CO₂はルビスコ（RuBisCO）の触媒作用によりRuBP（C₅）と結合し、不安定なC₆化合物を経て2分子の3-ホスホグリセリン酸（3-PGA、C₃）になる。これが暗反応（カルビン回路）の最初のCO₂固定反応。"
    }
  ],
  japanese: [
    {
      id: "j1",
      subject: "japanese",
      type: "choice",
      difficulty: "standard",
      category: "現代文・語彙",
      question: "次の文中の（　）に入る最も適切な語を選べ。\n「科学の進歩は人間の生活を豊かにする一方、（　）な問題も生み出している。」",
      choices: ["倫理的", "物理的", "経済的", "論理的"],
      answer: 0,
      explanation: "科学の進歩が生み出す「問題」として文脈上最も適切なのは「倫理的（ethical）」。AIや遺伝子操作など、科学と倫理の問題は医学分野でも重要なテーマ。"
    },
    {
      id: "j2",
      subject: "japanese",
      type: "choice",
      difficulty: "standard",
      category: "古文・文法",
      question: "「花咲きにけり」の「に」の文法的説明として正しいものはどれか。",
      choices: [
        "格助詞「に」",
        "完了の助動詞「ぬ」の連用形",
        "断定の助動詞「なり」の連用形",
        "打消の助動詞「ず」の一部"
      ],
      answer: 1,
      explanation: "「咲きにけり」の「に」は完了の助動詞「ぬ」の連用形。「ぬ」は「な・に・ぬ・ぬる・ぬれ・ね」と活用する（ナ変型）。「けり」は過去の助動詞。合わせて「咲いてしまった」の意。"
    },
    {
      id: "j3",
      subject: "japanese",
      type: "choice",
      difficulty: "hard",
      category: "現代文・読解",
      question: "次の文章を読んで、筆者の主張として最も適切なものを選べ。\n\n「医学は科学であると同時に、人間の苦しみに寄り添う技術でもある。診断の正確さだけでなく、患者の言葉に耳を傾け、その背後にある不安や恐怖を理解する力が、優れた医師には求められる。」",
      choices: [
        "医学は科学よりも芸術に近い",
        "優れた医師には科学的知識と共感的理解の両方が必要だ",
        "患者の不安を取り除くことが医師の最大の使命だ",
        "診断の正確さよりも患者の気持ちの方が大切だ"
      ],
      answer: 1,
      explanation: "本文は「科学であると同時に」「診断の正確さだけでなく」という表現で、科学的能力と共感的能力の両方を求めている。どちらかではなく両方が大切という主張。"
    },
    {
      id: "j4",
      subject: "japanese",
      type: "written",
      difficulty: "hard",
      category: "小論文",
      question: "次のテーマについて、400字程度で自分の考えを述べよ。\n\n「医師に最も必要な資質は何か」",
      answer: null,
      model_answer: "【模範解答例】\n医師に最も必要な資質は「科学的知識」と「共感力」の両立であると考える。\n\n現代医学は急速に進歩しており、医師は常に最新の知識・技術を習得しなければならない。診断の精度や治療の選択には科学的根拠が不可欠だ。\n\nしかし、患者は単なる「症例」ではなく、不安や恐怖を抱えた一人の人間である。検査データだけでなく、患者の訴えに耳を傾け、その背景にある生活環境や心理状態を理解する共感力が、適切な医療を実現する上で重要となる。\n\n私は将来医師として、知識の習得を怠らず、同時に一人ひとりの患者と真摯に向き合うことで、本当の意味で「人の役に立つ医師」を目指したい。",
      explanation: "採点ポイント（400字・医大小論文基準）：\n① 主張が明確か（自分の意見が述べられているか）\n② 理由・根拠が論理的か\n③ 具体例・説明があるか\n④ まとめ・結論が書かれているか\n⑤ 誤字脱字・文体の統一"
    },
    {
      id: "j5",
      subject: "japanese",
      type: "choice",
      difficulty: "standard",
      category: "古文・読解",
      question: "「徒然草」の作者は誰か。",
      choices: ["鴨長明", "兼好法師（吉田兼好）", "清少納言", "紫式部"],
      answer: 1,
      explanation: "徒然草は兼好法師（吉田兼好）の随筆。三大随筆は「枕草子」（清少納言）・「方丈記」（鴨長明）・「徒然草」（兼好法師）。医大入試では古典の基礎知識も問われる。"
    }
  ]
};

const SUBJECT_INFO = {
  math: { name: "数学", icon: "📐", color: "#4f46e5", desc: "数ⅠAⅡBⅢ・微積・確率・ベクトル" },
  english: { name: "英語", icon: "🌐", color: "#059669", desc: "読解・文法・語彙・英作文" },
  science: { name: "理科", icon: "🔬", color: "#dc2626", desc: "生物・化学・物理（医学系頻出）" },
  japanese: { name: "国語", icon: "📖", color: "#d97706", desc: "現代文・古文・小論文" }
};
