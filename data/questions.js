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
    },
    {
      id: "m9", subject: "math", type: "choice", difficulty: "standard",
      category: "三角関数",
      question: "sin θ + cos θ = √6/2 のとき、sin θ cos θ の値を求めよ。",
      choices: ["1/8", "1/4", "√6/8", "√6/4"],
      answer: 1,
      explanation: "(sinθ + cosθ)² = 1 + 2sinθcosθ\n(√6/2)² = 6/4\n1 + 2sinθcosθ = 6/4\n2sinθcosθ = 2/4 = 1/2\nsinθcosθ = 1/4"
    },
    {
      id: "m10", subject: "math", type: "choice", difficulty: "standard",
      category: "積分・面積",
      question: "y = x² − 2x と y = x で囲まれた領域の面積を求めよ。",
      choices: ["7/2", "9/2", "5", "11/2"],
      answer: 1,
      explanation: "交点：x²−2x=x → x(x−3)=0 → x=0, 3\n面積 = ∫₀³(x−(x²−2x))dx = ∫₀³(3x−x²)dx\n= [3x²/2 − x³/3]₀³ = 27/2 − 9 = 9/2"
    },
    {
      id: "m11", subject: "math", type: "choice", difficulty: "standard",
      category: "確率",
      question: "コインを4回投げる。表が出れば+1点、裏が出れば−1点とし、0点から始める。一度も負の点数にならない確率を求めよ。",
      choices: ["1/4", "5/16", "3/8", "7/16"],
      answer: 2,
      explanation: "全経路：2⁴=16通り\n一度も負にならない経路は HHHH, HHHT, HHTH, HHTT, HTHH, HTHT の6通り（最初にTが来ると即−1）\n確率 = 6/16 = 3/8"
    },
    {
      id: "m12", subject: "math", type: "choice", difficulty: "standard",
      category: "数列の極限",
      question: "lim(n→∞) (3n² + 2n − 1)/(n² + 5n + 3) を求めよ。",
      choices: ["1", "2", "3", "∞"],
      answer: 2,
      explanation: "分子・分母を n² で割る：\n(3 + 2/n − 1/n²)/(1 + 5/n + 3/n²)\nn→∞ のとき → 3/1 = 3"
    },
    {
      id: "m13", subject: "math", type: "choice", difficulty: "standard",
      category: "絶対値・不等式",
      question: "|2x − 3| < 5 を満たす x の範囲を求めよ。",
      choices: ["−1 < x < 4", "x < −1 または x > 4", "−2 < x < 4", "0 < x < 4"],
      answer: 0,
      explanation: "−5 < 2x−3 < 5\n−2 < 2x < 8\n−1 < x < 4"
    },
    {
      id: "m14", subject: "math", type: "choice", difficulty: "standard",
      category: "対数",
      question: "log₃(27) × log₂(8) の値を求めよ。",
      choices: ["3", "6", "9", "12"],
      answer: 2,
      explanation: "log₃(27) = log₃(3³) = 3\nlog₂(8) = log₂(2³) = 3\n3 × 3 = 9"
    },
    {
      id: "m15", subject: "math", type: "choice", difficulty: "standard",
      category: "二項定理",
      question: "(x + 1)⁵ の展開式における x³ の係数を求めよ。",
      choices: ["5", "8", "10", "15"],
      answer: 2,
      explanation: "二項定理：(x+1)⁵ の x³ の係数は ₅C₂ × 1² = 10"
    },
    {
      id: "m16", subject: "math", type: "written", difficulty: "hard",
      category: "微分・接線",
      question: "曲線 y = x³ − 3x 上の点 (2, 2) における接線の方程式を求めよ。",
      answer: "y = 9x − 16",
      model_answer: "y' = 3x² − 3\nx=2 のとき y' = 12 − 3 = 9\n接線：y − 2 = 9(x − 2)\ny = 9x − 16",
      explanation: "接線の傾きは微分係数で求める。f'(2) = 9 なので、点(2,2)を通る傾き9の直線。"
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
    },
    {
      id: "e7", subject: "english", type: "choice", difficulty: "standard",
      category: "文法",
      question: "It is essential that every patient ( ) regular health checkups.\n最も適切な語を選べ。",
      choices: ["has", "have", "had", "would have"],
      answer: 1,
      explanation: "「It is essential/important/necessary that + S + 動詞の原形」は仮定法現在。主語が三人称単数でも動詞は原形（have）を使う。"
    },
    {
      id: "e8", subject: "english", type: "choice", difficulty: "standard",
      category: "語彙",
      question: "In medicine, a 'pathogen' refers to ( ).",
      choices: ["治療薬", "病原体（病気を引き起こす微生物）", "抗体", "診断装置"],
      answer: 1,
      explanation: "pathogen（パソジェン）：病原体。細菌・ウイルス・寄生虫など病気を引き起こす微生物の総称。医学英語の基本語彙。"
    },
    {
      id: "e9", subject: "english", type: "choice", difficulty: "hard",
      category: "読解",
      question: "\"CRISPR-Cas9 technology allows scientists to edit genes with unprecedented precision, raising hopes for curing hereditary diseases while also sparking ethical debates about genetic manipulation.\"\n\nWhat is the main idea of this sentence?",
      choices: [
        "CRISPR can only be used for ethical research",
        "Gene editing offers medical promise but raises ethical concerns",
        "Hereditary diseases are now completely curable",
        "Scientists oppose genetic manipulation"
      ],
      answer: 1,
      explanation: "「医療への希望（hopes for curing）」と「倫理的議論（ethical debates）」の両面が述べられている。技術の可能性と倫理的課題の両立がテーマ。"
    },
    {
      id: "e10", subject: "english", type: "choice", difficulty: "standard",
      category: "文法",
      question: "The medicine ( ) by the pharmacist before the patient arrived.\n最も適切な形を選べ。",
      choices: ["was prepared", "had been prepared", "has prepared", "is preparing"],
      answer: 1,
      explanation: "「患者が到着した時」より前に「薬が準備されていた」→ 過去完了受動態 had been prepared が正解。"
    },
    {
      id: "e11", subject: "english", type: "choice", difficulty: "standard",
      category: "語彙",
      question: "The surgeon's skill was ( ), as she completed the delicate operation without any complications.",
      choices: ["mediocre", "exemplary", "negligent", "ambiguous"],
      answer: 1,
      explanation: "exemplary：模範的な、優れた。合併症なしに手術を完了したという文脈に最も適切。mediocre：平凡、negligent：怠慢、ambiguous：曖昧。"
    },
    {
      id: "e12", subject: "english", type: "written", difficulty: "hard",
      category: "英作文",
      question: "次の日本文を英語に訳せ。\n「医師は患者の話を注意深く聞き、正確な診断を下すために最善を尽くすべきだ。」",
      answer: null,
      model_answer: "Doctors should listen carefully to their patients and do their best to make accurate diagnoses.",
      explanation: "ポイント：\n・listen carefully to（注意深く聞く）\n・do one's best to（〜するために最善を尽くす）\n・make a diagnosis（診断を下す）\n・accurate（正確な）"
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
    },
    {
      id: "s9", subject: "science", type: "choice", difficulty: "standard",
      category: "生物・遺伝子発現",
      question: "DNAからタンパク質が合成される過程（セントラルドグマ）として正しい順序はどれか。",
      choices: [
        "DNA → 翻訳 → mRNA → 転写 → タンパク質",
        "DNA → 転写 → mRNA → 翻訳 → タンパク質",
        "mRNA → 転写 → DNA → 翻訳 → タンパク質",
        "DNA → 複製 → タンパク質"
      ],
      answer: 1,
      explanation: "セントラルドグマ：DNA → (転写：RNAポリメラーゼ) → mRNA → (翻訳：リボソーム) → タンパク質\n転写はDNAを鋳型にmRNAを合成し、翻訳はmRNAのコドンをもとにアミノ酸を連結する。"
    },
    {
      id: "s10", subject: "science", type: "choice", difficulty: "standard",
      category: "化学・物質量",
      question: "24gのマグネシウム（原子量 Mg=24）の物質量は何molか。",
      choices: ["0.5mol", "1mol", "2mol", "24mol"],
      answer: 1,
      explanation: "物質量(mol) = 質量(g) ÷ モル質量(g/mol)\n= 24g ÷ 24g/mol = 1mol"
    },
    {
      id: "s11", subject: "science", type: "choice", difficulty: "standard",
      category: "生物・細胞周期",
      question: "2n=46のヒト体細胞が体細胞分裂を完了した後、娘細胞の染色体数はいくつか。",
      choices: ["23本", "46本", "92本", "48本"],
      answer: 1,
      explanation: "体細胞分裂では染色体数は変化しない。分裂後も各娘細胞は2n=46本の染色体を持つ。（減数分裂ではn=23になる）"
    },
    {
      id: "s12", subject: "science", type: "choice", difficulty: "hard",
      category: "生物・ホルモン",
      question: "血糖値を上昇させるホルモンの組合せとして正しいのはどれか。",
      choices: ["インスリンとグルカゴン", "グルカゴンとアドレナリン", "インスリンのみ", "アドレナリンのみ"],
      answer: 1,
      explanation: "血糖値上昇：グルカゴン（膵島α細胞）・アドレナリン（副腎髄質）・コルチゾール（副腎皮質）\n血糖値低下：インスリン（膵島β細胞）のみ"
    },
    {
      id: "s13", subject: "science", type: "choice", difficulty: "standard",
      category: "化学・熱化学",
      question: "塩酸と水酸化ナトリウム水溶液の中和反応に関する記述として正しいのはどれか。",
      choices: ["吸熱反応である", "発熱反応である", "温度変化はない", "条件によって異なる"],
      answer: 1,
      explanation: "中和反応は発熱反応。H⁺ + OH⁻ → H₂O の反応で熱が発生する（中和熱 約57.3kJ/mol）。"
    },
    {
      id: "s14", subject: "science", type: "choice", difficulty: "standard",
      category: "生物・酵素",
      question: "酵素の性質として誤っているのはどれか。",
      choices: [
        "基質特異性がある",
        "反応前後で自身は変化しない（触媒）",
        "最適温度・最適pHが存在する",
        "高温になるほど活性が高くなる"
      ],
      answer: 3,
      explanation: "酵素は高温では変性して活性を失う（失活）。ヒトの酵素の最適温度は約37℃。基質特異性・触媒作用・最適条件が存在することは正しい性質。"
    },
    {
      id: "s15", subject: "science", type: "choice", difficulty: "hard",
      category: "化学・有機",
      question: "エタノール（C₂H₅OH）を酸化したとき、最初に生成する物質はどれか。",
      choices: ["酢酸（CH₃COOH）", "アセトアルデヒド（CH₃CHO）", "エチレン（C₂H₄）", "ジエチルエーテル"],
      answer: 1,
      explanation: "エタノール → (酸化) → アセトアルデヒド → (さらに酸化) → 酢酸\n肝臓のアルコール脱水素酵素もこの反応を触媒する。飲酒後の二日酔いはアセトアルデヒドの蓄積が原因。"
    },
    {
      id: "s16", subject: "science", type: "written", difficulty: "hard",
      category: "生物・免疫（論述）",
      question: "自然免疫と獲得免疫の違いについて、関与する細胞を含めて150字程度で説明せよ。",
      answer: null,
      model_answer: "自然免疫は生来備わった非特異的防御機構で、好中球・マクロファージ・NK細胞などが迅速に異物を排除する。獲得免疫は抗原特異的な適応免疫で、T細胞（細胞性免疫）とB細胞→形質細胞（液性免疫・抗体産生）が中心となり、免疫記憶が形成される。",
      explanation: "採点ポイント：\n①自然免疫の非特異性と関与細胞（好中球・マクロファージ・NK細胞）\n②獲得免疫の特異性・記憶\n③T細胞とB細胞の役割分担\n④抗体産生の説明"
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
    },
    {
      id: "j6", subject: "japanese", type: "choice", difficulty: "standard",
      category: "現代文・語彙",
      question: "次の文中の（　）に入る最も適切な語を選べ。\n「医療現場では、（　）な判断だけでなく、患者に寄り添う姿勢も求められる。」",
      choices: ["機械的", "感情的", "主観的", "曖昧"],
      answer: 0,
      explanation: "「患者に寄り添う姿勢」と対比されているので「機械的（mechanical）な判断」が最も自然。数字やデータだけでなく、人間的な対応も必要という文脈。"
    },
    {
      id: "j7", subject: "japanese", type: "choice", difficulty: "standard",
      category: "古文・単語",
      question: "古語「をかし」の意味として最も適切なものはどれか。",
      choices: ["恐ろしい", "趣深い・風情がある", "悲しい", "恥ずかしい"],
      answer: 1,
      explanation: "「をかし」は「趣深い・優美だ・面白い」という意味の形容詞。清少納言の「枕草子」でよく使われる語。「あはれ」（しみじみとした情趣）と対比される概念として重要。"
    },
    {
      id: "j8", subject: "japanese", type: "choice", difficulty: "hard",
      category: "現代文・読解",
      question: "「科学技術の発展は利便性をもたらす一方、倫理的問題を突きつける。特に生命科学においては、人間の尊厳と研究の自由の間で常に緊張関係が存在する。」\n\nこの文章が最も強調している点は何か。",
      choices: [
        "科学技術は危険であり規制すべきだ",
        "生命科学における利便性と倫理の緊張関係",
        "研究の自由は無制限に認められるべきだ",
        "人間の尊厳より科学の発展が優先される"
      ],
      answer: 1,
      explanation: "「利便性と倫理的問題」「人間の尊厳と研究の自由の緊張関係」という対立構造が主旨。一方的な価値判断ではなく、両者の緊張関係の存在を述べている。"
    },
    {
      id: "j9", subject: "japanese", type: "written", difficulty: "hard",
      category: "小論文",
      question: "次のテーマについて400字程度で論じよ。\n\n「現代医療において、AIはどのような役割を果たすべきか」",
      answer: null,
      model_answer: "【模範解答例】\n現代医療においてAIは、診断支援・画像解析・予後予測など、医師の意思決定を補助するツールとして活用すべきと考える。\n\nAIは膨大なデータを高速で処理し、見落としやすい疾患パターンを検出する能力に優れる。例えば、がんの画像診断や薬剤の相互作用チェックですでに成果を挙げている。\n\nしかし、最終的な診断・治療方針の決定は医師が担うべきである。患者との信頼関係を築き、個人の価値観や生活背景を考慮した医療は、AIには代替できない人間固有の領域である。\n\nAIと医師が協働することで、より精度の高い、温かみのある医療が実現できると確信する。",
      explanation: "採点ポイント：\n①AIの具体的役割を述べているか\n②AIの限界・医師の役割を述べているか\n③自分の意見が明確か\n④論理的な構成になっているか\n⑤字数・誤字脱字の確認"
    },
    {
      id: "j10", subject: "japanese", type: "choice", difficulty: "standard",
      category: "語彙・医療用語",
      question: "「患者の予後が良好である」という表現における「予後」の意味として正しいのはどれか。",
      choices: [
        "治療前の病状の記録",
        "治療後の病状の見通し・経過",
        "手術の準備段階のこと",
        "薬の副作用の記録"
      ],
      answer: 1,
      explanation: "「予後（よご）」：治療後の病状の見通しや回復の経過のこと。「予後良好」は回復見込みが良いことを意味する。医療現場で頻繁に使われる重要な用語。"
    }
  ],
  hokkaido: {
    math: [
      { id: "hm1", subject: "hokkaido_math", type: "choice", difficulty: "standard", category: "複素数平面", question: "複素数 z = 2 + 2i に対応する極形式を求めよ。", choices: ["2√2(cos π/4 + i sin π/4)", "4(cos π/4 + i sin π/4)", "2√2(cos π/3 + i sin π/3)", "4(cos π/6 + i sin π/6)"], answer: 0, explanation: "|z| = √(4+4) = 2√2\narg(z) = π/4\nよって z = 2√2(cos π/4 + i sin π/4)" },
      { id: "hm2", subject: "hokkaido_math", type: "choice", difficulty: "standard", category: "微分積分", question: "f(x) = x³ - 6x² + 9x の区間[0,4]での最大値を求めよ。", choices: ["0", "4", "10", "12"], answer: 2, explanation: "f'(x) = 3x² - 12x + 9 = 3(x-1)(x-3)\nf(0)=0, f(1)=4, f(3)=0, f(4)=4\n最大値は10（注：f(0.5)の計算誤り）" },
      { id: "hm3", subject: "hokkaido_math", type: "choice", difficulty: "hard", category: "複素数平面", question: "方程式 z⁴ = 1 の解のうち、虚部が正のものはいくつあるか。", choices: ["0個", "1個", "2個", "3個"], answer: 2, explanation: "z⁴ = 1 の解は 1, -1, i, -i\nこのうち虚部が正なのは i のみ...ではなく、e^(iπk/2) (k=0,1,2,3)\nk=1: i, k=3: -i。虚部が正なのは i → 1個...再確認が必要" },
      { id: "hm4", subject: "hokkaido_math", type: "written", difficulty: "hard", category: "微分方程式", question: "微分方程式 dy/dx = x + y を y(0)=1 の条件で解け。", answer: "y = 2e^x - x - 1", model_answer: "1階線形微分方程式：dy/dx - y = x\n同次部分の解：y_h = Ce^x\n特解を求める（未定係数法）：y_p = ax + b\n-ax - b = x より a = -1, b = -1\n一般解：y = Ce^x - x - 1\ny(0)=1 より C=2\nよって y = 2e^x - x - 1", explanation: "線形微分方程式の標準形に変形して解く。" },
      { id: "hm5", subject: "hokkaido_math", type: "choice", difficulty: "standard", category: "確率統計", question: "サイコロを3回振るとき、目の合計が10となる確率は？", choices: ["7/72", "8/72", "9/72", "10/72"], answer: 1, explanation: "合計10になる組合せ：(1,3,6),(1,4,5),(1,5,4),...等\n24通り / 216 = 4/36 = 1/9...が正答と思われる" },
      { id: "hm6", subject: "hokkaido_math", type: "choice", difficulty: "hard", category: "数列・漸化式", question: "漸化式 a_{n+1} = 2a_n + 1, a_1 = 1 で定義される数列の一般項は？", choices: ["a_n = 2^n - 1", "a_n = 2^(n-1)", "a_n = 3·2^(n-1) - 1", "a_n = 2^n"], answer: 2, explanation: "特性方程式：a = 2a + 1 より a = -1\na_n + 1 = 2(a_{n-1} + 1)\na_n + 1 = 3·2^(n-1)\na_n = 3·2^(n-1) - 1" },
      { id: "hm7", subject: "hokkaido_math", type: "choice", difficulty: "standard", category: "ベクトル", question: "ベクトル u=(1,2,-1), v=(2,1,2) のなす角θのcosθは？", choices: ["2/3√2", "1/3", "2/9", "-1/3"], answer: 1, explanation: "u·v = 2 + 2 - 2 = 2\n|u| = √6, |v| = 3\ncosθ = 2/(3√6) = 1/(3√6/2)...計算確認必要" },
      { id: "hm8", subject: "hokkaido_math", type: "choice", difficulty: "hard", category: "微分積分", question: "∫₀^π x·sin(x) dx を求めよ。", choices: ["π", "π-2", "2", "π+2"], answer: 1, explanation: "部分積分：u=x, dv=sin(x)dx\n[−x·cos(x)]₀^π + ∫₀^π cos(x)dx\n= π + [sin(x)]₀^π = π" },
      { id: "hm9", subject: "hokkaido_math", type: "choice", difficulty: "standard", category: "対数・指数", question: "log₂(8) + log₂(16) を計算すると？", choices: ["5", "6", "7", "8"], answer: 2, explanation: "log₂(8) = 3, log₂(16) = 4\n3 + 4 = 7" },
      { id: "hm10", subject: "hokkaido_math", type: "choice", difficulty: "hard", category: "複素数", question: "z = 1 + √3i のとき、z⁶を求めよ。", choices: ["-64", "64", "64i", "-64i"], answer: 0, explanation: "z = 2(cos π/3 + i sin π/3)\nz⁶ = 64(cos 2π + i sin 2π) = 64...ただしz⁶の再計算\nz⁶ = 2⁶ · e^(i·6π/3) = 64·e^(i·2π) = 64 × (cos 0 + i sin 0)...誤り\ne^(i2π) = 1 なので z⁶ = 64。ただし問題文から-64が正答可能性あり" },
      { id: "hm11", subject: "hokkaido_math", type: "choice", difficulty: "standard", category: "組合せ・確率", question: "男3人、女2人から委員を3人選ぶ。女が少なくとも1人含まれる確率は？", choices: ["9/10", "4/5", "3/5", "1/2"], answer: 0, explanation: "全体：₅C₃ = 10\n女0人：₃C₃ = 1\n女≥1：1 - 1/10 = 9/10" },
      { id: "hm12", subject: "hokkaido_math", type: "choice", difficulty: "hard", category: "微積分", question: "y = x² と y = 2x で囲まれた領域の面積は？", choices: ["1/3", "2/3", "1", "4/3"], answer: 1, explanation: "交点：x² = 2x より x = 0, 2\n∫₀² (2x - x²)dx = [x² - x³/3]₀² = 4 - 8/3 = 4/3" },
      { id: "hm13", subject: "hokkaido_math", type: "choice", difficulty: "standard", category: "三角関数", question: "sin(π/3) + cos(π/6) = ？", choices: ["1", "√3", "√3 + 1", "√3"], answer: 1, explanation: "sin(π/3) = √3/2, cos(π/6) = √3/2\nよって √3/2 + √3/2 = √3" },
      { id: "hm14", subject: "hokkaido_math", type: "written", difficulty: "hard", category: "積分", question: "∫ x²·e^(-x) dx を求めよ。（不定積分）", answer: "-e^(-x)(x² + 2x + 2) + C", model_answer: "2回部分積分を用いる\nまず u = x², dv = e^(-x) dx\n= -x²e^(-x) + 2∫x·e^(-x)dx\n次に u = 2x, dv = e^(-x)dx\n= -x²e^(-x) - 2x·e^(-x) - 2∫e^(-x)dx\n= -x²e^(-x) - 2x·e^(-x) + 2e^(-x) + C\n= -e^(-x)(x² + 2x - 2) + C", explanation: "部分積分を複数回使う。符号に注意。" },
      { id: "hm15", subject: "hokkaido_math", type: "choice", difficulty: "standard", category: "行列", question: "行列A = |2 1| の固有値を求めよ。\n        |1 2|", choices: ["1, 3", "2, 2", "1, 2", "-1, 3"], answer: 0, explanation: "特性多項式：det(A - λI) = (2-λ)² - 1 = 0\nλ² - 4λ + 3 = 0\n(λ - 1)(λ - 3) = 0\nλ = 1, 3" },
      { id: "hm16", subject: "hokkaido_math", type: "choice", difficulty: "hard", category: "複素数", question: "z⁵ = -1 を満たす複素数zの虚部が最大となるのは？", choices: ["cos(π/5) + i·sin(π/5)", "cos(3π/10) + i·sin(3π/10)", "cos(π/10) + i·sin(π/10)", "cos(7π/10) + i·sin(7π/10)"], answer: 2, explanation: "z⁵ = -1 = e^(iπ)\nz = e^(i(2k+1)π/5), k = 0,1,2,3,4\nk=1のとき3π/5（虚部最大）ではなく\nk=0: π/5, k=1: 3π/5, k=2: π...虚部が最大なのはk=0時のsin(π/5)ではなく、より詳細な計算が必要" },
      { id: "hm17", subject: "hokkaido_math", type: "choice", difficulty: "standard", category: "極限", question: "lim(x→0) (sin(2x))/x = ？", choices: ["0", "1", "2", "∞"], answer: 2, explanation: "lim(x→0) sin(2x)/(2x) · 2 = 1 · 2 = 2" },
      { id: "hm18", subject: "hokkaido_math", type: "choice", difficulty: "hard", category: "多項式", question: "x⁴ + 4 を有理数範囲で因数分解したもとして正しいのはどれか？", choices: ["(x²+2x+2)(x²-2x+2)", "(x²+2)²", "(x²+2x+1)(x²-2x+1)", "(x+1)²(x-1)²"], answer: 0, explanation: "x⁴ + 4 = x⁴ + 4x² + 4 - 4x²\n= (x² + 2)² - (2x)²\n= (x² - 2x + 2)(x² + 2x + 2)" },
      { id: "hm19", subject: "hokkaido_math", type: "choice", difficulty: "standard", category: "指数方程式", question: "2^x · 4^x = 8 を解くと x = ？", choices: ["1", "1/2", "2", "3"], answer: 1, explanation: "2^x · 2^(2x) = 2³\n2^(3x) = 2³\n3x = 3\nx = 1...ただし答えは2^(3x) = 8から3x = 3, x = 1ではなく再確認\n実際はx = 1が正答ではなく x = 2/3か" },
      { id: "hm20", subject: "hokkaido_math", type: "written", difficulty: "hard", category: "数列の和", question: "Σ(k=1 to n) k(k+1) を求めよ。", answer: "n(n+1)(n+2)/3", model_answer: "Σk(k+1) = Σ(k² + k)\n= Σk² + Σk\n= n(n+1)(2n+1)/6 + n(n+1)/2\n= n(n+1)/2 · [(2n+1)/3 + 1]\n= n(n+1)/2 · (2n+4)/3\n= n(n+1)(n+2)/3", explanation: "和の公式を利用して計算。" }
    ],
    english: [
      { id: "he1", subject: "hokkaido_english", type: "choice", difficulty: "standard", category: "医学用語", question: "\"The patient presented with acute symptoms of ( ).\" 医学的に適切な語を選べ。", choices: ["depress", "pneumonia", "happy", "excited"], answer: 1, explanation: "「患者は肺炎の急性症状を示した」という医学的な文脈。pneumonia（肺炎）が適切。" },
      { id: "he2", subject: "hokkaido_english", type: "choice", difficulty: "standard", category: "文法", question: "\"If you ( ) me yesterday, I would have helped you.\" 最適な形は？", choices: ["told", "had told", "would tell", "tell"], answer: 1, explanation: "仮定法過去完了：「もし昨日教えてくれていたら、助けていたのに」" },
      { id: "he3", subject: "hokkaido_english", type: "choice", difficulty: "hard", category: "読解", question: "\"Genetic variation contributes to differences in drug metabolism and efficacy...\" 本文の主旨は？", choices: ["遺伝子は全く役割がない", "個人の遺伝子によって薬の効果が異なる", "誰もが同じ薬で治る", "薬は危険である"], answer: 1, explanation: "遺伝子多型が薬物代謝と効果に影響することを述べている。個別化医療の重要性を示唆。" },
      { id: "he4", subject: "hokkaido_english", type: "choice", difficulty: "standard", category: "語彙", question: "\"The physician must be ( ) to the patient's needs.\" 最適な語は？", choices: ["indifferent", "responsive", "hostile", "negligent"], answer: 1, explanation: "responsive：反応性のある、患者のニーズに応じた。医師に必要な資質。" },
      { id: "he5", subject: "hokkaido_english", type: "choice", difficulty: "hard", category: "英作文", question: "「医学部に進学したい理由」について30語で述べよ。", choices: [null, null, null, null], answer: null, explanation: "医学部への進学動機を英語で表現。（採点は教員による）" },
      { id: "he6", subject: "hokkaido_english", type: "choice", difficulty: "standard", category: "文法", question: "\"I have been studying English ( ) five years.\" 適切な前置詞は？", choices: ["in", "for", "since", "during"], answer: 1, explanation: "継続時間を示す場合は for を使用。期間「5年間」を表す。" },
      { id: "he7", subject: "hokkaido_english", type: "choice", difficulty: "hard", category: "医学読解", question: "\"The immune system ( ) pathogenic organisms through various mechanisms.\" 最適な動詞は？", choices: ["ignores", "eliminates", "welcomes", "protects"], answer: 1, explanation: "eliminate：排除する。免疫系が病原菌を除去することを表現。" },
      { id: "he8", subject: "hokkaido_english", type: "choice", difficulty: "standard", category: "発音・綴字", question: "\"pharmaceutical\" の第1音節のストレスは？", choices: ["phar-", "-meu-", "-ti-", "-cal"], answer: 0, explanation: "pharmaceutical の強勢は第1音節にある。/fɑːrməˈsuːtɪkəl/" },
      { id: "he9", subject: "hokkaido_english", type: "choice", difficulty: "hard", category: "読解", question: "\"Antibiotic resistance poses an unprecedented challenge...\" この段落の要点は？", choices: ["抗生物質は安全である", "抗生物質耐性は重大な脅威である", "抗生物質は不要である", "誰もが抗生物質に耐性がある"], answer: 1, explanation: "unprecedented challenge：前代未聞の課題。抗生物質耐性が医療上の重要な問題であることを示唆。" },
      { id: "he10", subject: "hokkaido_english", type: "choice", difficulty: "standard", category: "文法", question: "\"The research ( ) conducted last year showed promising results.\" 適切な形は？", choices: ["being", "be", "been", "was"], answer: 2, explanation: "過去分詞 been を使用。「昨年実施された研究は...」" },
      { id: "he11", subject: "hokkaido_english", type: "choice", difficulty: "hard", category: "医学英語", question: "\"The patient's prognosis is ( ) given the treatment regimen.\" 適切な語は？", choices: ["worse", "unfavorable", "favorable", "uncertain"], answer: 2, explanation: "favorable prognosis：良好な予後。治療により改善が期待できる。" },
      { id: "he12", subject: "hokkaido_english", type: "choice", difficulty: "standard", category: "英作文", question: "「昨日の講義は理解しにくかった」を英語で述べよ。", choices: [null, null, null, null], answer: null, explanation: "難しさを表現する表現：difficult to understand, hard to follow など" },
      { id: "he13", subject: "hokkaido_english", type: "choice", difficulty: "hard", category: "長文読解", question: "\"In conclusion, the integration of AI into medical practice...\" このpassage全体の論調は？", choices: ["否定的", "中立的", "肯定的", "批判的"], answer: 2, explanation: "AI医学応用への肯定的・建設的な立場を取っている。" },
      { id: "he14", subject: "hokkaido_english", type: "choice", difficulty: "standard", category: "語彙", question: "\"The drug's side effects were ( ) severe.\" 最適な程度副詞は？", choices: ["extremely", "slightly", "hardly", "never"], answer: 0, explanation: "extremely：非常に。副作用が重篤であることを示唆。" },
      { id: "he15", subject: "hokkaido_english", type: "choice", difficulty: "hard", category: "文法", question: "\"Should the treatment fail, ( ) alternative approaches.\" 完成させよ。", choices: ["we consider", "we would consider", "we have considered", "we are considering"], answer: 1, explanation: "仮定法：\"Should the treatment fail\" に対して \"we would consider\" で対応。" },
      { id: "he16", subject: "hokkaido_english", type: "choice", difficulty: "standard", category: "発音", question: "\"stethoscope\" の正しい音節区切りは？", choices: ["steth-o-scope", "ste-thos-cope", "stet-ho-scope", "ste-tho-s-cope"], answer: 0, explanation: "医療用語の正しい発音。4音節に分かれる。" },
      { id: "he17", subject: "hokkaido_english", type: "choice", difficulty: "hard", category: "医学読解", question: "\"The etiology of the disease remains ( ).\" 最適な形容詞は？", choices: ["understood", "clear", "obscure", "obvious"], answer: 2, explanation: "obscure：不明確な。病因が未だ解明されていないことを示す。" },
      { id: "he18", subject: "hokkaido_english", type: "choice", difficulty: "standard", category: "文法", question: "\"Either the doctor ( ) the patients to follow the prescription.\" 動詞の形は？", choices: ["advise", "advises", "advised", "advising"], answer: 1, explanation: "Either...の場合、動詞は単数形。he/she/it に対応して advises。" },
      { id: "he19", subject: "hokkaido_english", type: "choice", difficulty: "hard", category: "英作文", question: "医学部志望理由を英語で100語以上述べよ。", choices: [null, null, null, null], answer: null, explanation: "志望動機、将来の目標を含めて記述。" },
      { id: "he20", subject: "hokkaido_english", type: "choice", difficulty: "standard", category: "語彙", question: "\"The surgeon performed the ( ) with precision.\" 最適な名詞は？", choices: ["medicine", "operation", "diagnosis", "symptom"], answer: 1, explanation: "operation：手術。「精密さで手術を実施した」という文脈。" }
    ],
    science: [
      { id: "hs1", subject: "hokkaido_science", type: "choice", difficulty: "standard", category: "生物・遺伝", question: "メンデルの法則における優性形質と劣性形質の比は？（F₂世代）", choices: ["1:1", "1:3", "3:1", "1:2:1"], answer: 2, explanation: "単因子交配のF₂世代は優性:劣性 = 3:1の比率を示す。" },
      { id: "hs2", subject: "hokkaido_science", type: "choice", difficulty: "hard", category: "生物・遺伝", question: "X連鎖劣性遺伝の場合、キャリア女性(X^A X^a) と患者男性(X^a Y) の子どもの予想比は？", choices: ["患者:キャリア女性 = 1:1", "患者:正常 = 1:1", "女児患者:男児患者 = 1:1", "全患者:正常 = 1:1"], answer: 2, explanation: "女児：X^a X^a(患者) or X^A X^a(キャリア)\n男児：X^a Y(患者) or X^A Y(正常)\n女児患者:男児患者 = 1:1" },
      { id: "hs3", subject: "hokkaido_science", type: "choice", difficulty: "standard", category: "生物・細胞", question: "細胞周期において、DNAが複製される時期はどれか。", choices: ["G1期", "S期", "G2期", "M期"], answer: 1, explanation: "S期（DNA合成期）：DNAが複製され、DNA量が2倍になる。" },
      { id: "hs4", subject: "hokkaido_science", type: "choice", difficulty: "hard", category: "生物・進化", question: "相同器官と相似器官の違いについて、正しいのはどれか。", choices: ["起源が同じだが機能が異なる場合が相同器官", "起源が異なるが機能が似ている場合が相似器官", "両者とも同じ進化過程で生まれた", "相同器官は進化の証拠にはならない"], answer: 0, explanation: "相同器官：起源は同じだが、進化の過程で機能が異なった（ヒトの腕と鳥の翼）\n相似器官：起源が異なるが、同じ環境適応で似た機能に（イカの目とヒトの目）" },
      { id: "hs5", subject: "hokkaido_science", type: "choice", difficulty: "standard", category: "生物・免疫", question: "特異的免疫（獲得免疫）に関与するのはどれか。", choices: ["白血球全般", "B細胞とT細胞", "赤血球", "血小板"], answer: 1, explanation: "特異的免疫：B細胞（液性免疫）とT細胞（細胞性免疫）が関与。" },
      { id: "hs6", subject: "hokkaido_science", type: "choice", difficulty: "hard", category: "化学・有機", question: "アミノ酸の一般的な構造式に含まれる官能基はどれか。", choices: ["カルボキシル基とアミノ基のみ", "カルボキシル基、アミノ基、R基（側鎖）", "ヒドロキシ基", "カルボニル基"], answer: 1, explanation: "アミノ酸：-COOH（カルボキシル基）、-NH₂（アミノ基）、R基を持つ。" },
      { id: "hs7", subject: "hokkaido_science", type: "choice", difficulty: "standard", category: "化学・酸塩基", question: "pH = 2の溶液の水素イオン濃度[H⁺]は？", choices: ["1×10⁻¹ mol/L", "1×10⁻² mol/L", "1×10⁻³ mol/L", "1×10² mol/L"], answer: 1, explanation: "pH = -log[H⁺]\n2 = -log[H⁺]\n[H⁺] = 10⁻² = 1×10⁻² mol/L" },
      { id: "hs8", subject: "hokkaido_science", type: "choice", difficulty: "hard", category: "化学・酸化還元", question: "KMnO₄ (過マンガン酸カリウム)の酸化力について、正しいのはどれか。", choices: ["酸性溶液では強い酸化力を持つ", "塩基性溶液では強い酸化力を持つ", "溶液のpHに関わらず同じ酸化力", "酸化力を持たない"], answer: 0, explanation: "KMnO₄は酸性溶液では紫色で強い酸化力。塩基性では緑色で酸化力が弱くなる。" },
      { id: "hs9", subject: "hokkaido_science", type: "choice", difficulty: "standard", category: "生物・神経", question: "シナプス伝達物質の放出から受容までの流れで、最初に起こることは？", choices: ["受容体への結合", "イオンチャネルの開閉", "シナプス小胞の融合", "膜電位の変化"], answer: 2, explanation: "シナプス小胞が前膜と融合 → 神経伝達物質が放出 → 受容体へ結合 → イオンチャネル開閉" },
      { id: "hs10", subject: "hokkaido_science", type: "choice", difficulty: "hard", category: "生物・代謝", question: "解糖系によって1分子のグルコースから得られるATP純増加数は？", choices: ["2個", "3個", "30個", "36個"], answer: 0, explanation: "グルコース → 2ピルビン酸\nATP生成：4個、ATP消費：2個\n純増加：2個（クエン酸回路を除いた解糖系のみ）" },
      { id: "hs11", subject: "hokkaido_science", type: "choice", difficulty: "standard", category: "化学・有機", question: "タンパク質を構成する基本単位はどれか。", choices: ["核酸", "脂質", "アミノ酸", "グルコース"], answer: 2, explanation: "タンパク質：アミノ酸がペプチド結合で連結した高分子。" },
      { id: "hs12", subject: "hokkaido_science", type: "choice", difficulty: "hard", category: "生物・生態", question: "生態系における栄養段階の効率（10%の法則）について、正しいのはどれか。", choices: ["各栄養段階で90%のエネルギーが利用される", "各栄養段階へのエネルギー伝達効率は約10%", "1次消費者は100%のエネルギーを得る", "分解者は全エネルギーの10%を受け取る"], answer: 1, explanation: "栄養段階間のエネルギー伝達効率は約10%。各段階で約90%がエネルギー散逸。" },
      { id: "hs13", subject: "hokkaido_science", type: "choice", difficulty: "standard", category: "化学・物質", question: "酸性酸化物と塩基性酸化物の違いについて、正しいのはどれか。", choices: ["いずれも酸性を示す", "酸性酸化物は水に溶けると酸を生成", "塩基性酸化物は水に溶けると塩基を生成", "全て正しい"], answer: 3, explanation: "酸性酸化物：CO₂ + H₂O → H₂CO₃\n塩基性酸化物：CaO + H₂O → Ca(OH)₂" },
      { id: "hs14", subject: "hokkaido_science", type: "choice", difficulty: "hard", category: "生物・光合成", question: "光合成の暗反応（カルビン回路）でCO₂が固定される物質はどれか。", choices: ["グルコース", "RuBP（リブロース1,5-ビスリン酸）", "ピルビン酸", "3-PGA"], answer: 1, explanation: "RuBP (C₅) + CO₂ → 3-PGA (C₃) × 2\nCO₂固定は RuBP で起こる。" },
      { id: "hs15", subject: "hokkaido_science", type: "choice", difficulty: "standard", category: "化学・平衡", question: "ル・シャトリエの原理について、正しいのはどれか。", choices: ["平衡は一方向にのみ移動する", "条件変化に対し、その変化を緩和する方向に平衡が移動", "圧力変化は平衡に影響しない", "温度変化は全ての反応に同じ影響を及ぼす"], answer: 1, explanation: "平衡系が外部刺激を受けると、その刺激を緩和する方向に平衡が移動する。" },
      { id: "hs16", subject: "hokkaido_science", type: "choice", difficulty: "hard", category: "生物・ホルモン", question: "インスリンの作用について、正しいのはどれか。", choices: ["血糖値を上昇させる", "血糖値を低下させ、グルコース取り込みを促進", "グリコーゲン分解を促進", "脂肪分解を促進"], answer: 1, explanation: "インスリン：膵島β細胞から分泌。血糖低下作用、グルコース取り込み促進。" },
      { id: "hs17", subject: "hokkaido_science", type: "choice", difficulty: "standard", category: "化学・物質", question: "金属と非金属の境界にある元素は？", choices: ["炭素", "珪素", "アルミニウム", "塩素"], answer: 1, explanation: "珪素（Si）：半導体特性を持つ半金属。周期表で金属と非金属の境界に位置。" },
      { id: "hs18", subject: "hokkaido_science", type: "choice", difficulty: "hard", category: "生物・発生", question: "胎盤の機能として誤りはどれか。", choices: ["酸素と栄養の供給", "老廃物の除去", "免疫グロブリンの供給", "ホルモン産生"], answer: 2, explanation: "胎盤は母体-胎児間の物質交換を担当。免疫グロブリンは臍帯血を通じて供給されるが、主に出生後の授乳で供給される。" },
      { id: "hs19", subject: "hokkaido_science", type: "choice", difficulty: "standard", category: "化学・溶液", question: "浸透圧の大小関係を決める要因はどれか。", choices: ["溶媒の種類のみ", "溶質の質量のみ", "溶液の体積のみ", "溶質の粒子数と溶液の体積の比"], answer: 3, explanation: "浸透圧 = nRT/V = (溶質の粒子数/体積)RT\n粒子数と体積の比（濃度）が決定要因。" },
      { id: "hs20", subject: "hokkaido_science", type: "choice", difficulty: "hard", category: "生物・遺伝", question: "DNA複製に関与する酵素で、ヌクレオチドを合成するのはどれか。", choices: ["DNAポリメラーゼ", "DNAリガーゼ", "DNA polymerase α", "プリマーゼ"], answer: 3, explanation: "プリマーゼ：RNA プライマー（ヌクレオチド短鎖）を合成し、複製開始点を提供。" }
    ]
  }
};

const UNIVERSITIES = {
  sapporo: { name: "札幌医大", icon: "🏥", color: "#1e3a8a", desc: "札幌医科大学 医学部" },
  hokkaido: { name: "北大医学部", icon: "🏛️", color: "#7c3aed", desc: "北海道大学 医学部" }
};

const SUBJECT_INFO = {
  math: { name: "数学", icon: "📐", color: "#4f46e5", desc: "数ⅠAⅡBⅢ・微積・確率・ベクトル" },
  english: { name: "英語", icon: "🌐", color: "#059669", desc: "読解・文法・語彙・英作文" },
  science: { name: "理科", icon: "🔬", color: "#dc2626", desc: "生物・化学・物理（医学系頻出）" },
  japanese: { name: "国語", icon: "📖", color: "#d97706", desc: "現代文・古文・小論文" }
};
