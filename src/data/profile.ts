export type Lang = 'ar' | 'en'

export interface StatItem {
  value: string
  label: string
}

export interface ProjectItem {
  name: string
  kind: string
  tagline: string
  description: string
  image: string
}

export interface LocaleContent {
  meta: {
    name: string
    roles: string[]
    location: string
  }
  hero: {
    kicker: string
    tagline: string
    lede: string[]
    ctaPrimary: string
    ctaSecondary: string
  }
  about: {
    title: string
    intro: string[]
    pullQuote: string
    dual: {
      insideTitle: string
      insideText: string
      outsideTitle: string
      outsideText: string
    }
    body: string[]
    summary: string
  }
  professional: {
    title: string
    intro: string[]
    questions: string[]
    body: string[]
    traitsTitle: string
    traits: string[]
    closing: string[]
  }
  business: {
    title: string
    intro: string[]
    askList: string[]
    chain: string[]
    mytext: string[]
    mytext2: string[]
    mywords: string[]
    contrasts: { less: string; more: string }[]
    mytext3: string[]
    closing: string[]
    pullQuote: string[]
  }
  stats: {
    title: string
    intro: string[]
    items: StatItem[]
    statstext: string[]
    statstext2: string[]
    closing: string[]
    pullQuote: string[]
  }
  projects: {
    title: string
    intro: string[]
    items: ProjectItem[]
    closing: string[]
  }
  why: {
    title: string
    intro: string
    contrasts: string[]
    unifier: string[]
    explain: string[]
    capabilities: string[]
    closing: string[]
  }
  finale: {
    title: string
    negations: string[]
    body: string[]
    principles: string[]
    signature: string
  }
  contact: {
    title: string
    heading: [string, string]
    cta: string
    emailLabel: string
    linkedinLabel: string
    phoneLabel: string
    locationLabel: string
  }
}

export const profile: Record<Lang, LocaleContent> = {
  ar: {
    meta: {
      name: 'نسيم فلفلان',
      roles: [
        'مهندس جودة في وزارة الموارد البشرية',
        'مدير تطوير أعمال في يونيك مارك للتسويق',
        'رائد أعمال',
        'مؤسس متجر أبو ميس للحلول المتكاملة',
        'مؤسس بودكاست سَفر',
      ],
      location: 'الرياض، المملكة العربية السعودية',
    },
    hero: {
      kicker: 'نسيم فلفلان',
      tagline: 'عقل مهـــــــــــــني. نفس تجــــــــاري. ولسان يعرف من أين تُؤكل الفـــــــــــــــــــــــرص.',
      lede: ['نسيم مو موظف ممتاز وبس، ومو تاجر شاطر وبس.', 'هو الاثنين.. وهذا هو الفرق.'],
      ctaPrimary: 'تواصل معي',
      ctaSecondary: 'السيرة الذاتية',
    },
    about: {
      title: 'من هو نسيم فلفلان؟',
      intro: [
        'فيه ناس ينجحون داخل المؤسسة، لكن إذا طلعوا للسوق ضاعوا.',
        'وفيه ناس يعرفون السوق، لكن إذا دخلوا بيئة مهنية كبيرة ارتبكوا بين الأنظمة والاجتماعات والتقارير.',
        'نسيم فلفلان مو من هؤلاء ولا هؤلاء.',
      ],
      pullQuote: 'هو من النوع النادر الذي يعرف كيف يتحرك في الجهتـــــــــــــــــــين.',
      dual: {
        insideTitle: 'داخل المؤسســــــــــة',
        insideText:
          'يشتغل بعقل مهندس: يفهم المنظومة، يقرأ الخلل، يضبط الجودة، ويحوّل الفوضى إلى مسار واضح.',
        outsideTitle: 'خارج المؤسســــــــــة',
        outsideText:
          'يتحرك بنفس تاجر: يلتقط الفرصة، يفهم حاجة العميل، يعرف كيف يصيغ العرض، ويبيع الفكرة قبل المنتج.',
      },
      body: [
        'وهنا شخصية نسيم تظهر بوضوح. نسيم ما يتكلم كثيرًا. هو شخص يعرف أي جملة تُقال، ومتى تُقال، ولمن تُقال. ',
        'يعرف يدخل على العميل من الباب الصحيح. يعرف يقرأ التردد قبل أن يتحول إلى رفض. ويعرف يحوّل الكلام العادي إلى قيمة تُشترى. ',
      ],
      summary: 'رجل أخذ من الوظــــــــــــــيفة انضباطها، ومن التجـــــــــــــارة حركتها، ومن الكلام قدرته على فتح الأبــــــــــــــــــــــــــــــواب.',
    },
    professional: {
      title: 'الجانب المهني',
      intro:
        ['نسيم في الجانب المهني مو من النوع الي يداوم وينتظر نهاية اليوم. هو من النوع الي إذا دخل أي منظومة،',' يبدأ يسأل الأسئلة التي لا يسألها الجميع:'],
      questions: [
        'ليش فيه تعطّل؟',
        'ليش تتكرر المشكلة؟',
        'من أين يهرب الوقت؟',
        'وأي رقم في التقرير يقول الحقيقة الي ما يقولها أحد؟',
      ],
      body: [
        'خلفيته في الهندسة الصناعية كوّنت فيه عقلية عملية؛ لا يرى العمل كمجموعة مهام، بل كنظام كامل. والنظام، في نظره، إما أن يكون واضحًا.. أو يحتاج إلى إعادة ترتيب.',
        'خلال مسيرته، عمل في بيئات تشغيلية وتحليلية، وراكم خبرة في تجربة العملاء، تحليل البيانات، بناء لوحات المؤشرات، أتمتة التقارير، وقيادة مبادرات التحسين المستمر.',
        'في بوبا العربية، كان جزءًا من بيئة تعتمد على الأرقام ومؤشرات الرضا، وتحسين تجربة العميل. صمم وتابع لوحات NPS، تعامل مع مئات الآلاف من استجابات العملاء،  وساهم في تحويل البيانات إلى قرارات ومبادرات تطويرية.',
        'واليوم، يعمل مهندس جودة في وزارة الموارد البشرية، في خطوة مهنية تعكس انتقاله الطبيعي إلى مساحة الجودة المؤسسية؛ حيث لا يكفي أن تعمل، بل يجب أن تعرف كيف تقيس العمل، تضبطه، وتطوره.',
      ],
      traitsTitle: 'ما الذي يميّزه مهنيًا؟',
      traits: [
        'عقلية تحليلية لا تنخدع بالكلام العام.',
        'فهم تشغيلي يعرف أين تختنق المنظومات.',
        'قدرة على تحويل المشكلة إلى فرصة تحسين.',
        'انضباط مهني دون برود.',
        'حضور قيادي يعرف متى يتدخل ومتى يترك الفريق يتحرك.',
        'قدرة على الربط بين الجودة، العميل والنتيجة النهائية.',
      ],
      closing:
        ['نســــــــــــــــــــــــــــــيم ليس نوع الموظفين الي ينفذون المطلوب فقط.',' هو شخص يدخل المنظومة.. ثم يبدأ بفهم اللعــــــــــــــــــبة من الداخل.'],
    },
    business: {
      title: 'الجانب التجاري',
      intro:
        ['لكن الجانب الأوضح في نسيـم، والذي لا يمكن تجاهله، هو حسّه التجاري. وهنا لا نتكلم عن شخص "جرّب يبيع"،',' بل عن شخص يملك حــــــــــــــــــسّ البيّاع بالفطرة؛ من النوع الي يقدر أن يجلس معك خمس دقائق، ثـــــــــــم يعرف تقريبًا:'],
      askList: [
        'ما الذي تحتاجه.',
        'ما الذي يوقفك.',
        'ما الذي يخليك تقول نعم.',
        'وما الجملة التي تحتاج تسمعها حتى تتخذ القرار.',
      ],
      chain: ['الكلام إذا صيغ صح', 'يتحول إلى ثقة', 'والثقة تتحول إلى قرار', 'والقرار يتحول إلى بيع'],
      mytext:['نسيم يعرف يـــــــبيع الكــــــــــــــــــلام.',' لكن مو في معناه التقليدي الفارغ.'],
      mywords:['كلام', 'ثقة', 'قرار', 'بيع'],
      mytext2:['يعرف يبيع الكلام لأنه يعرف أن الكلام، إذا صيغ صح:','الكلام يتحول إلى ثقة','والثقة تتحول إلى قرار ','والقرار يتحول إلى بيع',' هذي مو موهبة بسيطة'],
      contrasts: [
        { less: 'كثير يعرف يشرح المنتج.', more: 'قليل يعرف يخليك تشعر أن المنتج جاء في وقته.' },
        {
          less: 'كثير يعرف يعرض خدمة.',
          more: 'قليل يعرف يحوّل الخدمة إلى حل واضح لمشكلة كانت معلّقة في رأس العميل.',
        },
        { less: 'كثير يبيعون بالسعر.', more: 'نسيم يبيع بالقيمة.' },
      ],
      mytext3:['لذلك، تجارته ليست مجرد بيع وشراء. هي: ',' قراءة ناس',' قراءة سوق',' قراءة لحظة'],
      closing: ['يعرف متى يضـــــغط، ومتى يخــــــــــــــــفف.',' متى يمــزح، ومتى يكون جــــــــــــــــــــــــــــــادًا.',' متى يفتح الموضوع، ومتى يقفل الصفقة. ','وهنا قــــــــــــــــــــوته:'],
      pullQuote: ['نسيم ما يطــــــــــارد العميل.',' نسيم يخلي العميل يقتنع أنه جاء للمكان الصح.'],
    },
    stats: {
      title: 'أرقام لا تجامل',
      intro:['الكلام جميل، لكن السوق لا يحترم الكلام وحده. ','الأرقام هنا تقول إن نسيـم ما يبيع صورة عن نفسه، بل يملك تجارب فعلية خلف هذه الصورة.',' من أبرز ما حققه واشتغل عليه:'],
      items: [
        { value: '+300', label: 'مكينة حلاقة (الجزازة) تم بيعها' },
        { value: '+300', label: 'خدمة كتابة سيرة ذاتية' },
        { value: '+500', label: 'منتج رقمي تم بيعه' },
        { value: '+20', label: 'لوحة مؤشرات NPS صممها وتابعها' },
        { value: '+150K', label: 'استبيان عميل تم التعامل معه' },
        { value: '+300', label: 'مبادرة كايزن للتحسين المستمر' },
        { value: '75', label: 'درجة NPS تحققت في قسم الطب عن بُعد' },
        { value: '4', label: 'أعضاء فريق مبيعات بناه وأداره' },
        { value: 'Ꝏ', label: 'أسس وأدار متجرًا إلكترونيًا عبر منصة سلة' },
        { value: 'Ꝏ', label: 'عمل في تطوير الأعمال واستقطاب العملاء كمدير لتطوير الأعمال لدى يونيك مارك للتسويق' },
        { value: 'Ꝏ', label: 'أعد تقارير تحليلية وعروضًا تنفيذية لدعم القرار' },
      ],
      statstext:['هذه الأرقام تكشف الخلطة الحقيقية:',' نسيم لا يعتمد على الحدس وحده ','ولا على الكلام وحده',' ولا على الشهادة وحدها'],
      statstext2:['هو يجمع بين الثلاثة:',' حس التاجر ','لغة البيع',' وعقلية المهندس'],
      closing: ['وهذه خلطة صعبة. ','لأن البائع العادي قد يعرف كيف يقنـــــعك. ','والمحلل العادي قد يعرف كيف يقرأ الرقم.',' لكن نسيـم يعرف كيف يقرأ الرقم، ثم يحوله إلى كلام مفهوم، ثم يحوله إلى عرض قابل للبيع.',' وهنا الفـــــــــــــــــــــــــــرق.'],
      pullQuote: ['الأرقام عنده مو للــــــــــــــــــــــــــــــــــــــــــــزينة.', 'الأرقام عنده ذخـــــــــــــــــــــــــــــــــــــــــــــــيرة.'],
    },
    projects: {
      title: 'مشاريع تحمل شخصيته',
      intro:
        ['مشاريع نسيم لا تبدو كأفكار منفصلة عنه. ','هي امتداد واضح لشخصيته: رجل يرى الحاجة، يلتقط الفرصة، ثم يحوّلها إلى مشروع له نبرة وقيمة.'],
      items: [
        {
          name: 'أبو ميس للحلول المتكاملة',
          kind: 'متجر إلكتروني عبر منصة سلة',
          tagline: 'في أبو ميس، نسيم يبيع الحل.',
          description:
            'أبو ميس للحلول المتكاملة في سلة ليس متجرًا تقليديًا يعرض منتجات تقليدية. هو فكرة قائمة على اختصار الطريق على العميل: فهم الحاجة، ترتيب الخيارات، وربط الشخص بالحل المناسب دون لف ودوران.',
          image: '/projects/salla.jpeg',
        },
        {
          name: 'بودكاست سَفر',
          kind: 'حضور صوتي',
          tagline: 'وفي سَفر، يبيع الفكرة.',
          description:
            'بودكاست سَفر، فهو امتداد آخر لنفس الشخصية؛ مساحة للكلام الذي يكشف، يعبر، ويفتح المعنى. سَفر ليس محتوى عابرًا، بل حضور صوتي يعكس عقلية نسيـم في قراءة الناس، السوق، التجربة، وما خلف التفاصيل.',
          image: '/projects/safar.jpeg',
        },
      ],
      closing: ['وفي الاثنين، تظهر نفس البصمة: ','كلمة في مكانها','فكرة لها اتجاه',' ومشروع يعرف لماذا وُجد'],
    },
    why: {
      title: 'لماذا نسيم؟',
      intro: 'لأن كثيرًا من الناس يملكون جزءًا واحدًا من المعادلة.',
      contrasts: [
        'بعضهم مهني جدًا.. لكن بارد.',
        'بعضهم تجاري جدًا.. لكن فوضوي.',
        'بعضهم يتكلم جيدًا.. لكن لا يعرف كيف ينفذ.',
        'وبعضهم ينفذ جيدًا.. لكن لا يعرف كيف يبيع ما يفعله.',
      ],
      unifier:
        ['نسيم فلفلان مختلف لأنه جمع أكثر من جهة في شخصية واحدة:',' مهنية تعرف النظام. ','تجارة تعرف السوق. ','لسان يعرف العميل. ','عقل يعرف أن القيمة لا تُقال فقط، بل تُبنى وتُعرض وتُباع.'],
      explain:['ولهذا، التعامل معه لا يعني التعامل مع شخص عنده “مسار جيد” فقط.',' بل مع شخص عنده قدرة على:'],
      capabilities: [
        'فهم المنظومات',
        'قراءة السوق',
        'بناء العروض',
        'قيادة الفرق',
        'تحويل الكلام إلى ثقة',
        'تحويل الثقة إلى قرار',
        'تحويل القرار إلى نتيجة',
      ],
      closing:
        ['وهنا تحديدًا يظهر نسيم الحقيقي: ','شخص إذا دخل المؤسسة فهم نظامها ','وإذا دخل السوق فهم مزاجه','وإذا جلس مع العميل عرف من أين يبدأ الكلام'],
    },
    finale: {
      title: 'الخلاصة',
      negations: ['ليس مجرد مهندس جودة.', 'وليس مجرد رائد أعمال.', 'وليس مجرد شخص يملك متجرًا أو بودكاستًا.'],
      body: [
        'هو شخصية تجمع: بين الانضباط والحركة. بين العقل واللسان. بين الجودة والبيع. بين المؤسسة والسوق.',
        'يعرف أن العمل يحتاج نظامًا. ويعرف أن السوق يحتاج سرعة.',
        'ويعرف أن العميل يحتاج من يفهمه قبل أن يبيعه. وهذه هي قوة نسيم:'
      ],
      principles: [
        'لا يبيع لأنه يرفع صوته.',
        'ولا يقنع لأنه يكثر الكلام.',
        'ولا يتحرك لأنه يبحث عن ضجيج.',
        'بل لأنه يعرف كيف يمسك الفرصة من طرفها الصحيح.',
      ],
      signature: 'عقل مهني. نفس تجاري. ولسان يعرف كيف يحوّل الفكرة إلى فرصة.',
    },
    contact: {
      title: 'لنتحدث',
      heading: ['الفكرة عندك،', 'الفرصة عندي.'],
      cta: 'تواصل معي',
      emailLabel: 'البريد الإلكتروني',
      linkedinLabel: 'لينكدإن',
      phoneLabel: 'الجوال',
      locationLabel: 'الموقع',
    },
  },
  en: {
    meta: {
      name: 'Naseem Filfilan',
      roles: [
        'Quality Engineer, Ministry of Human Resources',
        'Business Development Manager, Unique Mark Marketing',
        'Entrepreneur',
        'Founder, Abu Mais Integrated Solutions',
        'Founder, Safar Podcast',
      ],
      location: 'Riyadh, Saudi Arabia',
    },
    hero: {
      kicker: 'Naseem Filfilan',
      tagline: 'A professional mind. A trader’s instinct. A tongue that knows where opportunity is won.',
      lede: [
        'Naseem isn’t just a great employee, and he isn’t just a sharp trader. ',
        'He’s both, and that’s the difference.',
      ],
      ctaPrimary: 'Get in touch',
      ctaSecondary: 'Résumé',
    },
    about: {
      title: 'Who is Naseem Filfilan?',
      intro: [
        'Some people thrive inside an organization, but get lost the moment they step into the open market.',
        'Others read the market well, but stumble the moment they enter a large professional environment, buried in systems, meetings, and reports.',
        'Naseem Filfilan is neither.',
      ],
      pullQuote: 'He’s the rare kind who knows how to move fluently in both directions.',
      dual: {
        insideTitle: 'Inside the organization',
        insideText:
          'He operates with an engineer’s mind: understands the system, reads the fault line, tightens quality, and turns chaos into a clear path.',
        outsideTitle: 'Outside the organization',
        outsideText:
          'He moves with a trader’s instinct: spots the opportunity, understands the client’s need, knows how to frame the offer, and sells the idea before the product.',
      },
      body: [
        'Naseem doesn’t talk much. He’s someone who knows which sentence to say, when to say it, and to whom.',
        'He knows how to approach a client through the right door. He reads hesitation before it turns into rejection. And he knows how to turn ordinary conversation into value worth paying for.',
      ],
      summary:
        'A man who took discipline from employment, momentum from trade, and from words: the power to open doors.',
    },
    professional: {
      title: 'The professional side',
      intro:
        ['On the professional side, Naseem isn’t the type who clocks in and waits for the day to end. He’s the type who, once inside any system, ','starts asking the questions no one else asks:'],
      questions: [
        'Why is there a bottleneck?',
        'Why does the problem keep repeating?',
        'Where is the time leaking?',
        'And which number in the report tells the truth no one else is saying?',
      ],
      body: [
        'His background in industrial engineering built a practical mindset in him; he doesn’t see work as a set of tasks, but as a complete system. And a system, in his view, is either clear, or it needs rearranging.',
        'Throughout his career, he has worked across operational and analytical environments, building experience in customer experience, data analysis, dashboard design, report automation, and leading continuous-improvement initiatives.',
        'At Bupa Arabia, he was part of a numbers-driven environment focused on satisfaction indicators and customer experience. He designed and maintained NPS dashboards, handled hundreds of thousands of customer responses, and helped turn raw data into decisions and improvement initiatives.',
        'Today, he works as a quality engineer at the Ministry of Human Resources, a career step that reflects his natural progression into institutional quality, where it isn’t enough to simply work; you have to know how to measure the work, control it, and improve it.',
      ],
      traitsTitle: 'What sets him apart professionally',
      traits: [
        'An analytical mindset that isn’t fooled by generic talk.',
        'Operational understanding of exactly where systems choke.',
        'The ability to turn a problem into an improvement opportunity.',
        'Professional discipline without coldness.',
        'A leadership presence that knows when to step in and when to let the team move.',
        'The ability to connect quality, the customer, and the final outcome.',
      ],
      closing:
        ['Naseem isn’t the kind of employee who just executes what’s asked.',' He’s someone who enters the system.. then starts understanding the game from the inside.'],
    },
    business: {
      title: 'The business side',
      intro:
        ['The clearest side of Naseem, the one impossible to ignore, is his business instinct. And this isn’t about someone who "tried selling once." This is someone with a born seller’s instinct; ','the type who can sit with you for five minutes and already know, roughly:'],
      askList: [
        'What you need.',
        'What’s stopping you.',
        'What makes you say yes.',
        'And the exact sentence you need to hear before you decide.',
      ],
      chain: ['Words, framed right', 'turn into trust', 'trust turns into a decision', 'and a decision turns into a sale'],
      mytext:['نسيم يعرف يبيع الكلام.',' لكن مو في معناه التقليدي الفارغ.'],
      mywords:['كلام', 'ثقة', 'قرار', 'بيع'],
      mytext2:['يعرف يبيع الكلام لأنه يعرف أن الكلام، إذا صيغ صح،',' يتحول إلى ثقة.','والثقة تتحول إلى قرار. ','والقرار يتحول إلى بيع.',' هذي مو موهبة بسيطة.'],
      contrasts: [
        { less: 'Many know how to explain a product.', more: 'Few know how to make you feel it arrived at the right time.' },
        {
          less: 'Many know how to pitch a service.',
          more: 'Few know how to turn a service into a clear answer to a problem sitting unresolved in the client’s head.',
        },
        { less: 'Many sell on price.', more: 'Naseem sells on value.' },
      ],
      mytext3:['لذلك، تجارته ليست مجرد بيع وشراء. ','هي قراءة ناس.',' قراءة سوق.',' قراءة لحظة.'],
      closing: [
        'His trade was never just buying and selling. It’s reading people. Reading the market. Reading the moment.',
        'He knows when to push and when to ease off. When to joke and when to be serious. When to open a topic and when to close the deal.',
      ],
      pullQuote: ['Naseem doesn’t chase the client.',' Naseem lets the client feel he arrived at exactly the right place.'],
    },
    stats: {
      title: 'Numbers that don’t flatter',
      intro:['الكلام جميل، لكن السوق لا يحترم الكلام وحده. ','الأرقام هنا تقول إن نسيـم ما يبيع صورة عن نفسه، بل يملك تجارب فعلية خلف هذه الصورة.',' من أبرز ما حققه واشتغل عليه:'],
      items: [
        { value: '300+', label: 'shaving machines sold ("Al-Jazzaza")' },
        { value: '300+', label: 'resume-writing services delivered' },
        { value: '500+', label: 'digital products sold' },
        { value: '20+', label: 'NPS dashboards designed and maintained' },
        { value: '150K+', label: 'customer surveys processed' },
        { value: '300+', label: 'Kaizen continuous-improvement initiatives led' },
        { value: '75', label: 'NPS score achieved in the telehealth department' },
        { value: '4', label: 'sales coordinators on a team he built and ran' },
      ],
      statstext:['هذه الأرقام تكشف الخلطة الحقيقية:',' نسيم لا يعتمد على الحدس وحده. ','ولا على الكلام وحده.',' ولا على الشهادة وحدها.'],
      statstext2:['هو يجمع بين الثلاثة:',' حس التاجر','لغة البيع',' وعقلية المهندس'],
      closing: ['Naseem doesn’t rely on instinct alone. Not on words alone. Not on credentials alone.', 'He combines all three: a trader’s instinct, the language of sales, and an engineer’s mindset.'],
      pullQuote: ['The numbers aren’t decoration.', 'The numbers are ammunition.'],
    },
    projects: {
      title: 'Projects that carry his signature',
      intro:
        ['مشاريع نسيم لا تبدو كأفكار منفصلة عنه. ','هي امتداد واضح لشخصيته: رجل يرى الحاجة، يلتقط الفرصة، ثم يحوّلها إلى مشروع له نبرة وقيمة.'],
      items: [
        {
          name: 'Abu Mais Integrated Solutions',
          kind: 'E-commerce, on the Salla platform',
          tagline: 'Naseem sells the solution.',
          description:
            'Not a traditional store selling traditional products. It’s an idea built on shortening the customer’s path: understanding the need, structuring the options, and connecting the person to the right solution, no runaround.',
          image: '/projects/salla.jpeg',
        },
        {
          name: 'Safar Podcast',
          kind: 'Audio presence',
          tagline: 'And in Safar, he sells the idea.',
          description:
            'Another extension of the same character; a space for talk that reveals, expresses, and opens up meaning. Not passing content, but a voice that reflects Naseem’s way of reading people, the market, experience, and what lies behind the details.',
          image: '/projects/safar.jpeg',
        },
      ],
      closing: ['In both, the same fingerprint shows: a word in its place, an idea with direction, a project that knows why it exists.'],
    },
    why: {
      title: 'Why Naseem?',
      intro: 'Because most people only hold one part of the equation.',
      contrasts: [
        'Some are very professional.. but cold.',
        'Some are very commercial.. but chaotic.',
        'Some talk well.. but don’t know how to execute.',
        'And some execute well.. but don’t know how to sell what they do.',
      ],
      unifier:
        ['Naseem Filfilan is different because he combines more than one side into a single character:',' professionalism that knows the system, ','business that knows the market, ','a tongue that knows the client, ','and a mind that knows value isn’t just spoken: it’s built, presented, and sold.'],
      explain:['And this is why dealing with him isn’t just dealing with someone who has a “good track record.”',' It’s dealing with someone who has the ability to:'],
      capabilities: [
        'Understanding systems',
        'Reading the market',
        'Building proposals',
        'Leading teams',
        'Turning words into trust',
        'Turning trust into a decision',
        'Turning a decision into a result',
      ],
      closing:
        ['And this is exactly where the real Naseem shows: someone who, entering an organization, understands its system; entering the market, understands its mood; and sitting with a client, knows exactly where to start the conversation.'],
    },
    finale: {
      title: 'The takeaway',
      negations: ['isn’t just a quality engineer.', 'isn’t just an entrepreneur.', 'isn’t just someone who owns a store or a podcast.'],
      body: [
        'He’s a character that combines discipline and momentum. Mind and tongue. Quality and sales. The institution and the market.',
        'He knows work needs a system. He knows the market needs speed. He knows the client needs to be understood before he’s sold to.',
      ],
      principles: [
        'He doesn’t sell by raising his voice.',
        'He doesn’t persuade by talking more.',
        'He doesn’t move because he’s chasing noise.',
        'He moves because he knows how to grab the opportunity by its right end.',
      ],
      signature: 'A professional mind. A trader’s instinct. A tongue that knows how to turn an idea into an opportunity.',
    },
    contact: {
      title: 'Let’s talk',
      heading: ['The idea is yours,', 'the opportunity is mine.'],
      cta: 'Get in touch',
      emailLabel: 'Email',
      linkedinLabel: 'LinkedIn',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
    },
  },
}
