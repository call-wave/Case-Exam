const quizData = [
  {
    category: "Pediatric PT",
    question: "เด็กชายอายุ 5 ปี มารับการตรวจเนื่องจากหกล้มบ่อย ลุกจากพื้นลำบากโดยต้องใช้มือดันไต่ขึ้นตามขาทั้งสองข้างเพื่อพยุงตัวขึ้นยืน (Gowers' sign positive) และมีน่องทั้งสองข้างโตแต่เนื้อสัมผัสแน่นหยุ่น ผลตรวจทางห้องปฏิบัติการพบค่า Creatine Kinase (CK) สูงผิดปกติมาก ได้รับการวินิจฉัยเป็น Duchenne Muscular Dystrophy (DMD) รูปแบบการออกกำลังกายในข้อใดเป็นข้อห้ามเด็ดขาด (Absolute contraindication) สำหรับเด็กรายนี้?",
    options: [
      "A. การออกกำลังกายแบบหดตัวขณะกล้ามเนื้อยาวออกที่มีแรงต้านสูง (High-resistance Eccentric exercise)",
      "B. การออกกำลังกายแบบแอโรบิกในน้ำอุ่นที่ระดับความหนักต่ำ (Low-intensity aquatic exercise)",
      "C. การปั่นจักรยานอยู่กับที่โดยใช้แรงต้านต่ำถึงปานกลาง (Submaximal cycling)",
      "D. การออกกำลังกายแบบหดตัวขณะกล้ามเนื้อสั้นเข้าที่มีแรงต้านต่ำ (Low-resistance Concentric exercise)"
    ],
    correct: 0,
    hint: "นึกถึงประเภทการหดตัวของกล้ามเนื้อที่ก่อให้เกิดความเค้นเชิงกลต่อเยื่อหุ้มเซลล์กล้ามเนื้อมากที่สุด",
    explanation: "ในโรค DMD เยื่อหุ้มเซลล์กล้ามเนื้อ (Sarcolemma) ขาด Dystrophin ทำให้เปราะบาง การออกกำลังกายแบบ Eccentric contraction จะสร้างแรงเค้นเชิงกลสูงจนเยื่อหุ้มเซลล์ฉีกขาด นำไปสู่การสลายตัวของเส้นใยกล้ามเนื้อ (Muscle necrosis) และเร่งการดำเนินของโรค"
  },
  {
    category: "Musculoskeletal PT",
    question: "นักกีฬาเบสบอลขว้างลูกมือขวามีอาการปวดไหล่ด้านหลังขณะขว้าง ตรวจพบ Glenohumeral Internal Rotation Deficit (GIRD) ข้างขวาลดลง 25° เทียบกับข้างซ้าย และ Total Rotational Motion (TROM) สูญเสียไป 10° ร่วมกับมี Posterior capsular tightness ข้อใดคือการรักษาทางกายภาพบำบัดที่เหมาะสมและตรงจุดที่สุด?",
    options: [
      "A. ยืด Anterior capsule และเพิ่มช่วงการเคลื่อนไหว External rotation",
      "B. ทำ Sleeper stretch หรือ Cross-body adduction stretch เพื่อยืด Posterior capsule",
      "C. ดัดดึงข้อไหล่ด้วยเทคนิค Anterior glide ร่วมกับเสริมแรง Subscapularis",
      "D. จำกัดการเคลื่อนไหวด้วยการใส่ผ้าคล้องแขน (Arm sling) ต่อเนื่อง 2 สัปดาห์"
    ],
    correct: 1,
    hint: "พิจารณาข้อต่อแคปซูลด้านที่มีการหนาตัวและตึงตัวจนผลักให้หัวกระดูก Humerus เลื่อนทิศทาง",
    explanation: "เมื่อ GIRD > 20° ร่วมกับสูญเสีย TROM > 5° มักเกิดจาก Posterior capsule หนาและหดรั้ง ส่งผลให้หัว Humerus เลื่อนขึ้นบนและไปทางด้านหลัง ก่อให้เกิด Internal impingement การรักษามาตรฐานคือ Sleeper stretch และ Cross-body stretch"
  },
  {
    category: "Musculoskeletal PT",
    question: "ผู้ป่วยหญิงหลังผ่าตัด ACL Reconstruction โดยใช้ Hamstring autograft สัปดาห์ที่ 3 ต้องการฝึกเพิ่มความแข็งแรงของกล้ามเนื้อ Quadriceps การออกกำลังกายข้อใดปลอดภัยต่อแรงดึงรั้งของเส้นเอ็นต่อกราฟต์ (Graft strain) มากที่สุด?",
    options: [
      "A. Open Kinetic Chain (OKC) Knee extension ในช่วงมุม 45° ถึง 0° (Full extension)",
      "B. Closed Kinetic Chain (CKC) Mini-squats ในช่วงมุม 0° ถึง 45° of flexion",
      "C. Open Kinetic Chain (OKC) Knee extension แบบใส่น้ำหนักถ่วงข้อเท้าตลอดช่วงมุม 90° ถึง 0°",
      "D. Resisted Isokinetic knee flexion แบบ High-velocity"
    ],
    correct: 1,
    hint: "นึกถึงการทำงานร่วมกันของ Hamstring (Co-contraction) ที่ช่วยต้านแรงเลื่อนไปข้างหน้าของกระดูกทิเบีย",
    explanation: "การออกกำลังกายแบบ CKC ในมุมตื้น (0°-45°) มีการทำงานร่วมกันระหว่าง Quads และ Hamstrings ช่วยลด Anterior tibial shear force ทำให้แรงตึงต่อ ACL graft ต่ำมาก ปลอดภัยในช่วงแรกของการฟื้นฟู"
  },
  {
    category: "Neurological PT",
    question: "ผู้ป่วยโรคหลอดเลือดสมองกึ่งเฉียบพลัน มีอาการ Pusher syndrome ซีกซ้ายอย่างรุนแรง โดยใช้แขนขวาค้ำยันพื้นดันลำตัวเอียงไปด้านซ้ายและต้านแรงผลักกลับ นักกายภาพบำบัดควรใช้กลยุทธ์การรักษาใด?",
    options: [
      "A. ใช้แรงผลักดันตัวผู้ป่วยกลับมาด้านขวาให้ตั้งตรงโดยเร็ว",
      "B. ผูกยึดแขนขวาไว้ไม่ให้ใช้ดันพื้น",
      "C. ใช้อุปกรณ์หรือแนวเส้นตรงในห้อง (Visual reference) เช่น กระจกเงา เพื่อให้ผู้ป่วยปรับแนวดิ่งด้วยตนเอง",
      "D. ฝึกยืนบนแผ่นโฟมเพื่อกระตุ้นระบบการทรงตัว Vestibular ทันที"
    ],
    correct: 2,
    hint: "การรับรู้แนวดิ่งผ่านสายตา (Visual verticality) ยังปกติ แต่การรับรู้แนวดิ่งจากตัวรับความรู้สึกในร่างกายผิดปกติ",
    explanation: "Pusher syndrome มีปัญหาด้าน Graviceptive perception แต่ Visual upright perception ยังสมบูรณ์ การใช้แรงต้านจากภายนอกจะยิ่งกระตุ้นให้คนไข้ดันกลับ การใช้ Visual feedback ให้คนไข้สังเกตและปรับแนวดิ่งด้วยตนเองจึงเป็นวิธีที่มีประสิทธิภาพสูงสุด"
  },
  {
    category: "Neurological PT",
    question: "ผู้ป่วยบาดเจ็บไขสันหลังระดับ T4 (Complete SCI) ระหว่างฝึกยืนบน Tilt table มีอาการปวดศีรษะตุบๆ อย่างรุนแรง ใบหน้าแดง เหงื่อออกท่วมบริเวณเหนือบอบบาดเจ็บ ความดันโลหิตพุ่งสูง 190/110 mmHg ชีพจร 48 bpm ขั้นตอนแรกที่ต้องทำทันทีคืออะไร?",
    options: [
      "A. ปรับเตียงให้ผู้ป่วยนอนราบยกขาสูงทันที",
      "B. จับผู้ป่วยลุกนั่งตัวตรง 90° ปลดเสื้อผ้าที่รัดแน่น และตรวจเช็กสายสวนปัสสาวะเพื่อหาจุดอุดตัน",
      "C. เริ่มทำ CPR ทันทีเนื่องจากภาวะ Bradycardia",
      "D. ให้ผู้ป่วยสูดหายใจลึกๆ และรอสังเกตอาการ 15 นาที"
    ],
    correct: 1,
    hint: "ภาวะ Autonomic Dysreflexia (AD) ซึ่งเป็นภาวะฉุกเฉินทางการแพทย์ในผู้ป่วยระดับ T6 ขึ้นไป",
    explanation: "ในภาวะ Autonomic Dysreflexia ห้ามนอนราบเด็ดขาดเพราะจะทำให้ความดันในสมองยิ่งสูงขึ้น ต้องจัดให้อยู่ในท่านั่งตัวตรงเพื่ออาศัยแรงโน้มถ่วงลดความดัน (Orthostatic effect) และรีบกำจัดสิ่งกระตุ้น ซึ่งสาเหตุกว่า 80% เกิดจากการคั่งของน้ำปัสสาวะหรือสายสวนพับงอ"
  },
  {
    category: "Neurological PT",
    question: "ผู้ป่วยโรคพาร์กินสัน (Hoehn and Yahr stage 3) มักมีอาการเดินซอยเท้าถี่และเกิด Freezing of Gait ขณะเลี้ยวตัวหรือเดินผ่านช่องประตูแคบ กลยุทธ์การฝึกเดินข้อใดช่วยลดอาการติดขัดได้ดีที่สุดตามหลักประสาทวิทยา?",
    options: [
      "A. สั่งให้ผู้ป่วยเร่งก้าวเท้าให้เร็วที่สุดขณะเดินผ่านจุดแคบ",
      "B. ใช้การกำหนดจังหวะจากภายนอก (External cueing) เช่น เสียงจังหวะ Metronome หรือเส้นมาร์กเกอร์สีตัดบนพื้น",
      "C. ฝึกเดินถอยหลังบนลู่วิ่งไฟฟ้าแบบไร้ราวจับ",
      "D. ใช้กระแสไฟฟ้ากระตุ้นกล้ามเนื้อปลายประสาท (FES) ที่ข้อเท้าขณะก้าวเดิน"
    ],
    correct: 1,
    hint: "สมองส่วน Basal ganglia ที่ควบคุมจังหวะการก้าวเสียไป ต้องใช้ Visual หรือ Auditory pathway อื่นมาชดเชย",
    explanation: "Freezing of gait ตอบสนองได้ดีมากต่อ External cues (Visual / Auditory / Somatosensory) เนื่องจากช่วยกระตุ้นการส่งสัญญาณประสาทผ่านวงจร Premotor cortex ชดเชยความบกพร่องของวงจร Basal ganglia-supplementary motor area"
  },
  {
    category: "Musculoskeletal PT",
    question: "ผู้ป่วยหลังผ่าตัดเปลี่ยนข้อสะโพกเทียม (Total Hip Arthroplasty) โดยใช้ Posterior approach ท่าทางหรือการเคลื่อนไหวในข้อใดต้องหลีกเลี่ยงอย่างเด็ดขาดเพื่อป้องกันข้อสะโพกหลุด?",
    options: [
      "A. งอสะโพกเกิน 90°, หุบสะโพกข้ามแนวกึ่งกลางลำตัว, และหมุนสะโพกเข้าด้านใน (Internal rotation)",
      "B. เหยียดสะโพกไปด้านหลัง, กางสะโพกออกด้านนอก, และหมุนสะโพกออกด้านนอก (External rotation)",
      "C. งอเข่าขณะสะโพกเหยียดตรงในท่ายืน",
      "D. นั่งบนเก้าอี้สูงที่มีระดับเบาะสูงกว่าระดับข้อเข่า"
    ],
    correct: 0,
    hint: "Posterior approach มีการเปิดผ่าแคปซูลข้อสะโพกด้านหลัง ท่าที่ดันหัวกระดูกต้นขาไปด้านหลังคือข้อห้าม",
    explanation: "Posterior approach ทำให้โครงสร้างด้านหลังข้อสะโพกหย่อนตัวและอ่อนแอ จึงห้ามทำท่า Hip Flexion > 90°, Adduction ข้ามกึ่งกลาง และ Internal rotation เพราะจะดันหัวกระดูก Femoral head หลุดออกทางด้านหลังของเบ้าสะโพก"
  },
  {
    category: "Cardiopulmonary PT",
    question: "ผู้ป่วย COPD ระยะรุนแรงที่มีภาวะถุงลมโป่งพอง มีอาการเหนื่อยหอบ หายใจตื้นและเร็ว ตรวจพบการเกิด Dynamic hyperinflation และ Air trapping เทคนิคการฝึกการหายใจข้อใดช่วยลดแรงต้านและระบายลมคั่งได้ดีที่สุด?",
    options: [
      "A. Forced expiratory technique (Huffing) อย่างรุนแรงและเร็ว",
      "B. Pursed-lip breathing โดยผ่อนลมหายใจออกทางริมฝีปากช้าๆ เบาๆ",
      "C. Breath holding technique กลั้นหายใจท้ายการหายใจเข้า 5 วินาที",
      "D. Incentive spirometry แบบเน้น Volume สูงสุด"
    ],
    correct: 1,
    hint: "เทคนิคที่ช่วยสร้าง Positive expiratory pressure อ่อนๆ ในทางเดินหายใจส่วนต้นเพื่อป้องกันทางเดินหายใจยุบตัว",
    explanation: "Pursed-lip breathing ช่วยสร้างแรงดันบวกเล็กน้อย (PEEP-like effect) พยุงไม่ให้หลอดลมฝอยยุบตัวขณะหายใจออก ยืดระยะเวลาการหายใจออก ช่วยขับอากาศที่คั่งค้าง (Air trapping) และลดอัตราการหายใจ"
  },
  {
    category: "Musculoskeletal PT",
    question: "ผู้ป่วย Lumbar disc herniation ตรวจพบอาการปวดหลังร้าวลงขาข้างขวา ร่วมกับมี Lateral shift ลำตัวเบ้ไปทางด้านซ้าย (Contralateral shift) ตามหลักการประเมินและรักษาของ McKenzie method ขั้นตอนแรกที่ต้องทำคือข้อใด?",
    options: [
      "A. ทำ Prone extension (ท่าแมวน้ำ) ทันทีเพื่อดันหมอนรองกระดูกกลับเข้าที่",
      "B. จัดดัดดึงแก้ไข Lateral shift ให้ลำตัวกลับเข้าสู่แนวกึ่งกลางก่อน จึงเริ่มทำท่า Extension",
      "C. ฝึกท่า Williams flexion exercise งอเข่าชิดอกทันที",
      "D. ดึงหลังด้วยเครื่อง Traction น้ำหนัก 50% ของน้ำหนักตัว"
    ],
    correct: 1,
    hint: "หากมีท่าทางลำตัวเบ้ (Shift) จำเป็นต้องจัดคืนแกนกระดูกก่อนเริ่มบริหารในแนวระนาบหน้า-หลัง",
    explanation: "ตามหลัก McKenzie หากผู้ป่วยมี Lateral shift ร่วมอยู่ด้วย จะไม่สามารถทำ Extension ได้อย่างถูกต้องและอาจทำให้อาการปวดร้าวลงขาแย่ลง ต้องแก้ไข Lateral shift ให้ลำตัวตรงก่อน (Shift correction) จึงจะดำเนินขั้นตอนการดันหมอนรองกระดูกในแนว Extension ต่อไป"
  },
  {
    category: "Cardiopulmonary PT",
    question: "ผู้ป่วยหลังทำผ่าตัด CABG วันที่ 3 ขณะทำ Phase I Cardiac Rehabilitation เดินช้าๆ พบว่า SBP ลดลงจาก 130 เหลือ 110 mmHg และมอนิเตอร์ ECG พบ ST-segment depression 2 mm ชนิด Horizontal นักกายภาพบำบัดควรปฏิบัติอย่างไร?",
    options: [
      "A. ลดความเร็วในการเดินลงแล้วเดินต่อให้ครบเวลา",
      "B. หยุดการออกกำลังกายทันที ให้นั่งพัก รายงานแพทย์ และติดตามสัญญาณชีพอย่างใกล้ชิด",
      "C. เปลี่ยนเป็นท่ายกแขนบริหารเบาๆ ในท่านั่งแทน",
      "D. ให้ผู้ป่วยดื่มน้ำเย็นทันทีเพื่อเพิ่มความดันโลหิต"
    ],
    correct: 1,
    hint: "เกณฑ์ข้อห้ามเด็ดขาดที่บ่งบอกถึงภาวะกล้ามเนื้อหัวใจขาดเลือดเฉียบพลันขณะออกกำลังกาย (Termination criteria)",
    explanation: "เกณฑ์หยุดการออกกำลังกายเด็ดขาด (Absolute termination criteria): SBP ลดลงมากกว่า 10 mmHg ร่วมกับมีหลักฐานของกล้ามเนื้อหัวใจขาดเลือด (ST depression ≥ 2 mm) บ่งชี้ว่าหัวใจห้องล่างซ้ายสูบฉีดเลือดไม่เพียงพอและกำลังขาดเลือด ต้องหยุดทันที"
  },
  {
    category: "Neurological PT",
    question: "ผู้ป่วยหญิงอายุ 58 ปี มีอาการบ้านหมุนเฉียบพลันเมื่อล้มตัวลงนอนหรือพลิกตะแคงตัวบนเตียง มีอาการนานประมาณ 30 วินาทีแล้วหายไป ตรวจ Dix-Hallpike test ข้างขวา พบ Torsional upbeating nystagmus นาน 20 วินาที การรักษาทางกายภาพบำบัดข้อใดตรงกับพยาธิสภาพมากที่สุด?",
    options: [
      "A. ทำ Barbecue roll maneuver 360 องศา",
      "B. ทำ Epley maneuver ทางด้านขวา",
      "C. สั่งให้ผู้ป่วยนอนนิ่งๆ บนเตียงราบ 3 วันโดยไม่ขยับศีรษะ",
      "D. ฝึก Habituation exercises ด้วยท่า Brandt-Daroff ทันทีโดยไม่ต้องทำ Repositioning"
    ],
    correct: 1,
    hint: "Torsional upbeating nystagmus บ่งชี้ความผิดปกติของ Posterior semicircular canal",
    explanation: "Dix-Hallpike ให้ผลบวกเป็น Upbeating torsional nystagmus ที่มี Latency และคงอยู่น้อยกว่า 1 นาที เป็นลักษณะจำเพาะของ Posterior canal BPPV ชนิด Canalithiasis การรักษามาตรฐานอันดับหนึ่งคือ Epley maneuver (Canalith Repositioning Procedure)"
  },
  {
    category: "Musculoskeletal PT",
    question: "ผู้ป่วยชายอายุ 45 ปี ปวดคอร้าวลงสะบักและแขนขวาด้านข้างจนถึงนิ้วหัวแม่มือ ตรวจพบ Biceps reflex ลดลง (1+) และ Spurling's test ให้ผลบวก หากต้องการรักษาด้วยเครื่องดึงคอ (Mechanical Cervical Traction) ควรจัดคอมุมใดและใช้น้ำหนักเริ่มต้นเท่าใดจึงจะเหมาะสมและปลอดภัย?",
    options: [
      "A. ดึงที่มุม Full Extension น้ำหนัก 30% ของน้ำหนักตัว",
      "B. ดึงที่มุม Cervical Flexion ประมาณ 24°-30° ด้วยแรงดึงเริ่มต้น 10-15 ปอนด์ (หรือประมาณ 7-10% ของน้ำหนักตัว)",
      "C. ดึงที่มุม Lateral flexion ไปด้านที่มีอาการ น้ำหนัก 25 กิโลกรัม",
      "D. ดึงที่มุม Neutral 0° น้ำหนัก 50% ของน้ำหนักตัว"
    ],
    correct: 1,
    hint: "อาการปวดร้าวตามรากประสาท C6 การเปิดช่อง Intervertebral foramen ระดับคอส่วนล่างต้องการมุมก้มที่พอเหมาะ",
    explanation: "การเปิดช่อง Intervertebral foramen ระดับ C5-C7 ต้องจัดคอมุม Flexion ราว 24°-30° และแรงดึงเริ่มต้นเพื่อความปลอดภัยควรอยู่ที่ 10-15 ปอนด์ แล้วจึงค่อยๆ ปรับเพิ่มขึ้น แต่ไม่ควรเกิน 20-25 ปอนด์ในระยะแรกเพื่อป้องกันกล้ามเนื้อหดเกร็งต้าน"
  },
  {
    category: "Musculoskeletal PT",
    question: "ผู้ป่วยชายอายุ 28 ปี ได้รับการวินิจฉัยว่าเป็น Ankylosing Spondylitis (AS) มีอาการปวดและข้อยึดติดบริเวณกระดูกสันหลังและข้อกระดูกเชิงกรานช่วงเช้า การจัดโปรแกรมกายภาพบำบัดข้อใดเป็นข้อห้ามหรือไม่เหมาะสมสำหรับผู้ป่วยรายนี้?",
    options: [
      "A. การฝึกการขยายตัวของทรวงอก (Chest expansion) และ Diaphragmatic breathing",
      "B. การฝึกยืดกล้ามเนื้อและการเคลื่อนไหวในทิศทาง Spinal extension",
      "C. การออกกำลังกายว่ายน้ำท่ากรรเชียง (Backstroke)",
      "D. การเน้นออกกำลังกายท่า Spinal flexion ซ้ำๆ เช่น การซิทอัพ (Sit-ups) และงอเข่าชิดอกแรงๆ"
    ],
    correct: 3,
    hint: "พยาธิสภาพของโรค AS นำไปสู่ภาวะกระดูกสันหลังเชื่อมติดในท่าก้มโก่ง (Kyphosis)",
    explanation: "ผู้ป่วย AS มีแนวโน้มเกิดข้อกระดูกสันหลังเชื่อมติดและกระดูกพรุนร่วมด้วย ท่าทางที่ผิดปกติคือ Thoracic kyphosis และ Forward head การบริหารท่า Flexion ซ้ำๆ จะยิ่งส่งเสริมให้กระดูกสันหลังค่อมผิดรูปถาวร และเพิ่มแรงเฉือนต่อกระดูกสันหลังที่เปราะ เสี่ยงต่อการเกิด Fracture"
  },
  {
    category: "Geriatric PT",
    question: "หญิงสูงอายุ 74 ปี ตรวจพบมวลกระดูก T-score ที่กระดูกสันหลังระดับ L1-L4 เท่ากับ -3.2 (Severe Osteoporosis) มีอาการปวดหลังเรื้อรัง การออกกำลังกายและท่าทางในชีวิตประจำวันข้อใดควรหลีกเลี่ยงอย่างเด็ดขาด?",
    options: [
      "A. การเดินเร็วบนพื้นราบสม่ำเสมอ (Weight-bearing endurance walking)",
      "B. การฝึกความแข็งแรงของกล้ามเนื้อสะโพกและต้นขาในท่ายืน",
      "C. ท่าบริหารก้มแตะปลายเท้า (Toe touch) และการบิดหมุนลำตัวแบบมีแรงกระแทก (End-range trunk flexion with rotation)",
      "D. การออกกำลังกายเสริมสร้างกล้ามเนื้อเหยียดหลัง (Back extensors strengthening) ในท่านอนคว่ำ"
    ],
    correct: 2,
    hint: "แรงกดอัด (Compressive force) ที่กระทำต่อส่วนหน้าของ Anterior vertebral body",
    explanation: "ในภาวะกระดูกพรุนรุนแรง ท่าก้มหลังสุดองศา (Flexion) ร่วมกับการบิดหมุนลำตัว (Trunk rotation) จะสร้างแรงกดอัดมหาศาลต่อโครงสร้างกระดูกสันหลังส่วนหน้า นำไปสู่การเกิด Anterior wedge compression fracture ได้ง่ายมาก"
  },
  {
    category: "Cardiopulmonary PT",
    question: "ผู้ป่วยบาดเจ็บที่ศีรษะ (Traumatic Brain Injury) พักรักษาตัวใน ICU มีเสมหะคั่งค้างในปอดกลีบซ้ายล่าง ตรวจพบความดันในกะโหลกศีรษะ (Intracranial Pressure: ICP) อยู่ที่ 23 mmHg (ค่าปกติ < 15-20 mmHg) การรักษาทางกายภาพบำบัดข้อใดถือเป็นข้อห้ามเด็ดขาด?",
    options: [
      "A. การจัดท่าระบายเสมหะโดยปรับเตียงให้ศีรษะต่ำลง (Trendelenburg position)",
      "B. การดูดเสมหะแบบควบคุมเวลาไม่เกิน 10-15 วินาที",
      "C. การขยับข้อต่อแขนขาแบบ Passive ROM อย่างนุ่มนวล",
      "D. การจัดท่านอนศีรษะสูง 30 องศาเพื่อระบายการไหลเวียนเลือดดำจากสมอง"
    ],
    correct: 0,
    hint: "ท่าทางที่ขัดขวางการไหลเวียนของเลือดดำออกจากกะโหลกศีรษะ (Venous return from jugular vein)",
    explanation: "การจัดท่าศีรษะต่ำ (Trendelenburg position) ในผู้ป่วยที่มี ICP > 20 mmHg เป็นข้อห้ามเด็ดขาด เพราะจะขัดขวางการระบายเลือดดำจากสมองกลับเข้าสู่หัวใจ ทำให้ความดันในกะโหลกศีรษะพุ่งสูงขึ้นอย่างรวดเร็ว เสี่ยงต่อภาวะสมองเลื่อนกดทับก้านสมอง (Brain herniation)"
  },
  {
    category: "Neurological PT",
    question: "ผู้ป่วย Stroke มีอาการอ่อนแรงซีกขวา ประเมิน Brunnstrom recovery stage ของแขนขวาได้ Stage 3 (มีการเคลื่อนไหวแบบ Synergy ชัดเจน แต่ยังไม่สามารถแยกส่วนการเคลื่อนไหวนอกแบบแผนได้) เป้าหมายการรักษาทางกายภาพบำบัดในขั้นต่อไปควรเน้นที่สิ่งใด?",
    options: [
      "A. กระตุ้นให้เกิด Associated reaction เพื่อเสริมแรง Flexor synergy ให้รุนแรงขึ้น",
      "B. ฝึกการเคลื่อนไหวที่เริ่มแยกออกจากแบบแผน Synergy (Movement combinations breaking away from synergies) ตาม Stage 4",
      "C. ให้ใส่สลิงห้อยแขนไว้ตลอดเวลาเพื่อป้องกัน Subluxation โดยไม่ต้องฝึกขยับ",
      "D. ฝึกหยิบจับวัตถุขนาดเล็กด้วยปลายนิ้วแบบ Individual finger movement ทันที"
    ],
    correct: 1,
    hint: "การก้าวข้ามจาก Brunnstrom Stage 3 ไปสู่ Stage 4 คือการหลุดพ้นจาก Synergy pattern",
    explanation: "Brunnstrom Stage 3 คือระยะที่มี Spasticity สูงสุดและเคลื่อนไหวได้เฉพาะในรูปแบบ Synergy การรักษาเพื่อเลื่อนสู่ Stage 4 คือการฝึกเคลื่อนไหวที่เริ่มทำลายแบบแผน Synergy เช่น การเอื้อมมือไปข้างหน้าพร้อมเหยียดศอก (Pronation with elbow extension) หรือการเอามือแตะหลังสะโพก"
  },
  {
    category: "Neurological PT",
    question: "ผู้ป่วยโรคหลอดเลือดสมองตีบที่ก้านสมองส่วน Medulla ด้านข้าง (Lateral Medullary Syndrome / Wallenberg syndrome) มักพบความผิดปกติของการตรวจร่างกายข้อใดชัดเจนที่สุด?",
    options: [
      "A. อัมพาตครึ่งซีกชนิด Spasticity ของแขนขาข้างเดียวกับรอยโรค",
      "B. สูญเสียการรับความรู้สึกเจ็บและอุณหภูมิที่ใบหน้าข้างเดียวกับรอยโรค และที่ลำตัว/แขนขาด้านตรงข้ามรอยโรค (Crossed sensory loss)",
      "C. สูญเสียการพูดและการทำความเข้าใจภาษา (Global aphasia)",
      "D. กล้ามเนื้อใบหน้าด้านล่างอ่อนแรงด้านตรงข้ามรอยโรคแบบ UMN lesion"
    ],
    correct: 1,
    hint: "พยาธิสภาพของ Trigeminal spinal nucleus และ Spinothalamic tract ในก้านสมอง",
    explanation: "Wallenberg syndrome (PICA occlusion) มีลักษณะเฉพาะคือ Crossed sensory loss: สูญเสีย Pain & Temperature ที่ใบหน้าข้างเดียวกับรอยโรค (Trigeminal tract) และที่ลำตัว/แขนขาข้างตรงข้าม (Spinothalamic tract) ร่วมกับมีอาการเดินเซ (Ataxia) และ Horner's syndrome"
  },
  {
    category: "Neurological PT",
    question: "ผู้ป่วยโรค Guillain-Barré Syndrome (GBS) ในระยะฟื้นตัว (Recovery phase) กำลังฝึกฟื้นฟูกำลังกล้ามเนื้อ หลักการออกกำลังกายข้อใดที่นักกายภาพบำบัดต้องระมัดระวังมากที่สุดเพื่อป้องกันความเสียหายต่อเส้นประสาทที่กำลังซ่อมแซม?",
    options: [
      "A. หลีกเลี่ยงภาวะกล้ามเนื้อล้าเกินขีดจำกัด (Overwork weakness) โดยแบ่งรอบฝึกสั้นๆ และมีช่วงพักบ่อยครั้ง",
      "B. ต้องฝึกจนกล้ามเนื้อเกิด Exhaustion ทุกครั้งเพื่อกระตุ้น Axonal sprouting",
      "C. เน้นเฉพาะการฝึกยกน้ำหนักสูงสุดแบบ 1-Repetition Maximum (1-RM)",
      "D. ห้ามเคลื่อนไหวข้อต่อใดๆ ทั้งสิ้นจนกว่าเส้นประสาทจะงอกสมบูรณ์ 100%"
    ],
    correct: 0,
    hint: "เส้นประสาทที่กำลังเกิด Remyelination มีความไวต่อความล้าและเสียหายซ้ำได้ง่าย",
    explanation: "ผู้ป่วย GBS มีความเสี่ยงสูงต่อภาวะ 'Overwork weakness' ซึ่งหากออกกำลังกายหนักจนล้าเกินไป จะทำให้เซลล์ประสาทและเส้นใยกล้ามเนื้อที่กำลังฟื้นฟูถูกทำลายซ้ำและเกิดการอ่อนแรงถาวร หลักการคือใช้แรงต้านระดับต่ำ-ปานกลาง และหยุดพักทันทีก่อนเกิดความล้า"
  },
  {
    category: "Neurological PT",
    question: "ผู้ป่วย Myasthenia Gravis (MG) มารับการรักษาทางกายภาพบำบัดเพื่อเพิ่มความทนทานของร่างกาย การจัดตารางเวลาและรูปแบบการออกกำลังกายข้อใดมีความเหมาะสมและปลอดภัยสูงสุด?",
    options: [
      "A. ออกกำลังกายในช่วงบ่ายแก่ๆ หรือเย็น ซึ่งเป็นช่วงที่ผู้ป่วยมีพลังงานสะสมสูงสุด",
      "B. จัดโปรแกรมออกกำลังกายในช่วงเช้า หรือช่วงหลังรับประทานยา Pyridostigmine (Mestinon) ประมาณ 1-2 ชั่วโมง",
      "C. ฝึกออกกำลังกายในห้องที่มีอุณหภูมิร้อนชื้นเพื่อกระตุ้นการไหลเวียนเลือด",
      "D. ฝึกอย่างต่อเนื่อง 45 นาทีโดยไม่มีการหยุดพักเพื่อเพิ่มการส่งผ่าน Acetylcholine"
    ],
    correct: 1,
    hint: "อาการของ MG จะแย่ลงเมื่อกล้ามเนื้อถูกใช้งานซ้ำๆ และอาการจะดีที่สุดหลังยาออกฤทธิ์สูงสุด",
    explanation: "ผู้ป่วย MG จะมีอาการล้าและอ่อนแรงเพิ่มขึ้นตามระยะเวลาของวัน (Diurnal variation) การฝึกกายภาพบำบัดจึงควรจัดในตอนเช้าหรือหลังรับประทานยากลุ่ม Anticholinesterase ประมาณ 1-2 ชั่วโมง ซึ่งเป็นช่วงที่ยายังออกฤทธิ์เต็มที่ และต้องหลีกเลี่ยงความร้อนเพราะความร้อนจะกระตุ้นให้อ่อนแรงหนักขึ้น"
  },
  {
    category: "Cardiopulmonary PT",
    question: "ผู้ป่วยโรคหลอดลมโป่งพอง (Bronchiectasis) มีเสมหะข้นเหนียวจำนวนมาก ตรวจฟังปอดพบเสียง Coarse crackles ชัดเจน การสอนเทคนิคการระบายเสมหะด้วยตนเองวิธีใดมีประสิทธิภาพและช่วยป้องกันทางเดินหายใจยุบตัวได้ดีที่สุด?",
    options: [
      "A. การไอแรงๆ ติดต่อกัน 10 ครั้งขณะก้มตัวไปข้างหน้า",
      "B. เทคนิค Active Cycle of Breathing Techniques (ACBT) ร่วมกับ Forced Expiratory Technique (Huffing)",
      "C. การกลั้นหายใจให้ได้นานที่สุดแล้วไอออกมาทันที",
      "D. การใช้เครื่อง Suction ดูดผ่านทางช่องจมูกวันละ 5 ครั้ง"
    ],
    correct: 1,
    hint: "เทคนิควงจรการหายใจที่ผสมผสานระหว่างการระบายลมหายใจและการดันเสมหะด้วยท่อทางเดินหายใจที่เปิดกว้าง",
    explanation: "ACBT ประกอบด้วย Breathing control, Thoracic expansion และ Huffing (FET) ช่วยเพิ่มการไหลเวียนอากาศเข้าสู่หลอดลมส่วนปลาย และการทำ Huffing ด้วยระดับลมปานกลางจะสร้าง Equal Pressure Point (EPP) เลื่อนขึ้นมาช่วยดันเสมหะโดยไม่ทำให้หลอดลมยุบตัวเหมือนการไอแรงๆ"
  },
  {
    category: "Musculoskeletal PT",
    question: "ผู้ป่วยหญิงอายุ 22 ปี ปวดบริเวณกระดูกสะบ้าข้างซ้าย (Patellofemoral Pain Syndrome: PFPS) มีอาการชัดเจนขณะเดินลงบันไดและนั่งพับเพียบ ตรวจพบ Functional valgus collapse ขณะทำ Single-leg squat การรักษาทางกายภาพบำบัดควรเน้นเสริมสร้างกล้ามเนื้อกลุ่มใดเป็นหลัก?",
    options: [
      "A. เน้นเฉพาะ Hamstrings และ Gastrocnemius ข้างเดิม",
      "B. เสริมความแข็งแรงของ VMO ร่วมกับกล้ามเนื้อสะโพกกลุ่ม Hip Abductors และ External Rotators (Gluteus medius & maximus)",
      "C. ฝึกเหยียดเข่าด้วยน้ำหนักถ่วงปลายเท้าแบบเต็มองศา (OKC Full knee extension)",
      "D. ประคบร้อนและดามข้อเข่าให้อยู่นิ่งเป็นเวลา 4 สัปดาห์"
    ],
    correct: 1,
    hint: "พิจารณาข้อสะโพกที่หมุนเข้าด้านใน (Adduction & Internal rotation) ซึ่งส่งผลให้ Q-angle เพิ่มขึ้น",
    explanation: "PFPS สัมพันธ์อย่างยิ่งกับความอ่อนแรงของสะโพกด้านหลังและข้าง (Gluteus medius/maximus) ทำให้เกิด Femoral internal rotation และ Dynamic valgus เพิ่มแรงกดต่อกระดูกสะบ้าด้านนอก การเสริมแรง Hip abductors/ER ควบคู่กับ Quads (VMO) ช่วยฟื้นฟู Patellar tracking ได้ดีที่สุด"
  },
  {
    category: "Musculoskeletal PT",
    question: "ผู้ป่วยได้รับการวินิจฉัยว่าเป็น Adhesive Capsulitis (Frozen Shoulder) ระยะยึดติด (Frozen / Stiff phase) ข้อใดบ่งบอกถึงแบบแผนการจำกัดช่วงการเคลื่อนไหวตามโครงสร้างแคปซูล (Capsular pattern) ของข้อต่อ Glenohumeral ได้ถูกต้องที่สุด?",
    options: [
      "A. Internal rotation ถูกจำกัดมากที่สุด > Abduction > External rotation",
      "B. External rotation ถูกจำกัดมากที่สุด > Abduction > Internal rotation",
      "C. Flexion ถูกจำกัดมากที่สุด > Extension > Internal rotation",
      "D. Abduction ถูกจำกัดเท่ากันกับ Adduction โดยหมุนข้อต่อได้ปกติ"
    ],
    correct: 1,
    hint: "การหมุนแขนออกด้านนอกจะตึงรั้งและถูกจำกัดองศามากที่สุดตามกฎของ Cyriax",
    explanation: "Capsular pattern ของข้อต่อไหล่ (Glenohumeral joint) คือ External Rotation จะถูกจำกัดมากที่สุด ตามด้วย Abduction และ Internal Rotation (ER > ABD > IR) ตามลำดับ"
  },
  {
    category: "Musculoskeletal PT",
    question: "ผู้ป่วยตรวจพบภาวะกระดูกสันหลังเลื่อน L5-S1 (Spondylolisthesis Grade I) มีอาการปวดหลังส่วนล่างเมื่อยืนหรือเดินนานๆ ท่าบริหารหรือการเคลื่อนไหวข้อใดควรหลีกเลี่ยงเพื่อป้องกันการเลื่อนตัวเพิ่มขึ้นของกระดูกสันหลัง?",
    options: [
      "A. การฝึกบริหารกล้ามเนื้อแกนกลางลำตัว (Core stabilization) ในท่านอนหงาย",
      "B. การบริหารท่า Williams flexion exercise (กอดเข่าชิดอก)",
      "C. ท่าบริหารแอ่นหลังสุดองศาซ้ำๆ (Repetitive spinal hyperextension) เช่น ท่า Prone press-ups",
      "D. การยืดกล้ามเนื้อ Iliopsoas และ Hamstrings อย่างนุ่มนวล"
    ],
    correct: 2,
    hint: "ท่าทางที่เพิ่มแรงเฉือน (Anterior shear force) ต่อกระดูกสันหลังส่วนเอวข้อสุดท้าย",
    explanation: "ในภาวะ Spondylolisthesis ท่าแอ่นหลัง (Hyperextension) จะเพิ่ม Anterior shear force ผลักให้กระดูก L5 เลื่อนไปข้างหน้าบน S1 มากขึ้น และบีบอัด Posterior elements จึงห้ามทำท่าแอ่นหลังสุดองศา โดยควรเน้น Flexion bias และ Core stability แทน"
  },
  {
    category: "Pediatric PT",
    question: "เด็กหญิงอายุ 7 ขวบ ได้รับการวินิจฉัยว่าเป็น Spastic Diplegia Cerebral Palsy เดินในลักษณะ Crouch gait pattern (ข้อสะโพกงอ, ข้อเข่างอ, ข้อเท้ากระดกตก) กล้ามเนื้อคู่ใดมักพบการตึงตัวหดสั้น (Tightness / Contracture) ที่เป็นสาเหตุหลักของท่าเดินนี้?",
    options: [
      "A. Iliopsoas และ Hamstrings",
      "B. Gluteus maximus และ Quadriceps",
      "C. Tibialis anterior และ Peroneus longus",
      "D. Erector spinae และ Abdominal muscles"
    ],
    correct: 0,
    hint: "กล้ามเนื้องอสะโพกและกล้ามเนื้องอเข่าที่มีแรงตึงตัวสูงตลอดวงจรการเดิน",
    explanation: "Crouch gait ในเด็ก CP มีลักษณะเด่นคือ Excessive hip flexion และ Knee flexion ตลอด Stance phase มีสาเหตุหลักจากความตึงตัวหดสั้นของกล้ามเนื้องอสะโพก (Iliopsoas) ร่วมกับกล้ามเนื้องอเข่า (Hamstrings) ควบคู่กับความอ่อนแรงของ Gluteus maximus และ Quadriceps"
  },
  {
    category: "Cardiopulmonary PT",
    question: "ผู้ป่วยหลังผ่าตัดกระดูกสะโพกหัก วันที่ 2 มีอาการปวดน่องข้างที่ผ่าตัด น่องบวมโตข้างเดียว กดเจ็บตามแนวด้านหลังขา และมีอุณหภูมิผิวอุ่นขึ้น นักกายภาพบำบัดสงสัยภาวะ Deep Vein Thrombosis (DVT) แนวทางการจัดการที่ถูกต้องและปลอดภัยที่สุดคือข้อใด?",
    options: [
      "A. นวดคลึงและบีบเค้นน่องอย่างแรงเพื่อสลายลิ่มเลือดที่อุดตัน",
      "B. ใช้แผ่นประคบร้อนจัดวางที่น่องและให้ผู้ป่วยลุกเดินลงน้ำหนักทันที",
      "C. งดการเคลื่อนไหวรุนแรงและการนวดบริเวณขาข้างนั้น แจ้งแพทย์เจ้าของไข้ทันทีเพื่อตรวจยืนยันด้วย Doppler Ultrasound",
      "D. จัดท่าให้ผู้ป่วยนอนห้อยขาลงต่ำข้างเตียงเพื่อลดแรงดันในหลอดเลือด"
    ],
    correct: 2,
    hint: "การบีบนวดหรือขยับรุนแรงอาจทำให้ก้อน Thrombus หลุดลอยไปอุดตันที่หลอดเลือดปอด (Pulmonary Embolism)",
    explanation: "เมื่อสงสัย DVT ห้ามนวด ห้ามบีบคลึง หรือเคลื่อนไหวรุนแรงเด็ดขาด เพราะอาจทำให้ลิ่มเลือดหลุดลอยกลายเป็น Pulmonary Embolism ซึ่งอันตรายถึงชีวิต ต้องให้ผู้ป่วยพักนิ่งๆ และส่งต่อแพทย์เพื่อรับการตรวจวินิจฉัยยืนยันและให้ยาต้านการแข็งตัวของเลือดก่อนเริ่มทำกายภาพบำบัด"
  },
  {
    category: "Neurological PT",
    question: "ผู้ป่วยถูกแทงด้วยของมีคมเข้าที่ไขสันหลังระดับทรวงอกซีกขวา ได้รับการวินิจฉัยเป็น Brown-Séquard syndrome (Hemicord lesion) ผลการตรวจทางระบบประสาทด้านการเคลื่อนไหวและความรู้สึกข้อใดถูกต้องที่สุด?",
    options: [
      "A. สูญเสียกำลังกล้ามเนื้อ (Motor) และความรู้สึกเจ็บ/อุณหภูมิ (Pain/Temp) ซีกขวาเหมือนกันทั้งหมด",
      "B. สูญเสียกำลังกล้ามเนื้อและสัมผัสลึก (Proprioception) ซีกขวา แต่สูญเสียความรู้สึกเจ็บและอุณหภูมิ (Pain/Temp) ซีกซ้าย",
      "C. สูญเสียกำลังกล้ามเนื้อซีกซ้าย แต่สูญเสียสัมผัสลึกและความรู้สึกเจ็บซีกขวา",
      "D. สูญเสียความรู้สึกเจ็บและอุณหภูมิทั้งสองซีกเท่ากัน แต่กำลังกล้ามเนื้อปกติ"
    ],
    correct: 1,
    hint: "Corticospinal tract และ Dorsal column มีการไขว้ข้ามที่ก้านสมอง แต่ Spinothalamic tract ไขว้ข้ามทันทีที่ระดับไขสันหลัง",
    explanation: "รอยโรคตัดครึ่งไขสันหลัง (Brown-Séquard) ด้านขวา ส่งผลให้ Corticospinal tract และ Dorsal column ด้านขวาถูกทำลาย จึงสูญเสีย Motor, Proprioception และ Vibration ในข้างเดียวกับรอยโรค (Ipsilateral/ขวา) ส่วน Spinothalamic tract ที่รับ Pain & Temp จะไขว้ข้ามมาจากซีกตรงข้าม จึงสูญเสีย Pain & Temp ในซีกซ้าย (Contralateral)"
  },
  {
    category: "Neurological PT",
    question: "ผู้ป่วยโรคหลอดเลือดสมองขาดเลือด (Ischemic Stroke) มีอาการอัมพาตครึ่งซีกโดยที่กำลังกล้ามเนื้อขาอ่อนแรงมากกว่าแขนอย่างชัดเจน (Lower extremity > Upper extremity) ร่วมกับมีภาวะกลั้นปัสสาวะไม่ได้ (Urinary incontinence) และเฉื่อยชาทางพฤติกรรม (Abulia) พยาธิสภาพนี้น่าจะเกิดจากการอุดตันของหลอดเลือดสมองเส้นใด?",
    options: [
      "A. Middle Cerebral Artery (MCA)",
      "B. Anterior Cerebral Artery (ACA)",
      "C. Posterior Cerebral Artery (PCA)",
      "D. Basilar Artery"
    ],
    correct: 1,
    hint: "หลอดเลือดสมองที่ไปเลี้ยงสมองส่วนใน (Medial surface) ของ Frontal และ Parietal lobe ซึ่งตรงกับแผนผัง Homunculus ส่วนขา",
    explanation: "ACA เลี้ยงผิวสมองด้านใน (Medial cortex) ซึ่งเป็นศูนย์ควบคุมขาและเท้า รวมถึง Frontal lobe ส่วนหน้า (ควบคุมพฤติกรรมและการขับถ่าย) ส่งผลให้ขาอ่อนแรงมากกว่าแขน แตกต่างจาก MCA infarction ที่แขนและใบหน้าจะอ่อนแรงมากกว่าขาอย่างเด่นชัด"
  },
  {
    category: "Neurological PT",
    question: "ผู้ป่วยบาดเจ็บไขสันหลังระดับ C6 แบบสมบูรณ์ (Complete SCI: ASIA A) กำลังฝึกกิจกรรมการดูแลตนเอง การคงสภาพการหดรั้งตัวของกล้ามเนื้อกลุ่มงอนิ้วมือ (Finger flexors tightness) มีความสำคัญอย่างยิ่งต่อการหยิบจับวัตถุด้วยกลไกใด?",
    options: [
      "A. Intrinsic-plus grip",
      "B. Tenodesis grasp action",
      "C. Hook grip action",
      "D. Spherical power grasp"
    ],
    correct: 1,
    hint: "ผู้ป่วยระดับ C6 สามารถกระดกข้อมือขึ้นได้ (Wrist extensor ทำงานได้) แต่ไม่มีกล้ามเนื้องอนิ้วมือ",
    explanation: "ผู้ป่วย C6 ขาดกล้ามเนื้องอนิ้วมือ แต่ยังมี Extensor carpi radialis (C6) ทำงานได้ เมื่อผู้ป่วยกระดกข้อมือขึ้น (Wrist extension) ความตึงตัวของ Finger flexors จะดึงให้นิ้วมืองอเข้าหาฝ่ามือโดยอัตโนมัติ เรียกว่า Tenodesis action นักกายภาพบำบัดจึงต้องระวังห้ามยืด Finger flexors พร้อมกับเหยียดข้อมือเด็ดขาด"
  },
  {
    category: "Neurological PT",
    question: "ผู้ป่วยหญิงมีอาการบ้านหมุนเฉียบพลันต่อเนื่องตลอด 24 ชั่วโมง มีอาการคลื่นไส้อาเจียนและเดินเซ แพทย์ต้องการแยกแยะระหว่าง Peripheral vestibular neuritis กับ Cerebellar ischemic stroke ข้อใดบ่งชี้ว่าอาการเกิดจากรอยโรคในระบบประสาทส่วนกลาง (Central lesion / Stroke)?",
    options: [
      "A. มีตากระตุกในทิศทางเดียว (Unidirectional horizontal nystagmus) ไม่ว่าจะมองไปทางใด",
      "B. ตรวจ Head Impulse Test (HIT) พบความผิดปกติชัดเจน (Corrective saccade positive)",
      "C. ตรวจพบ Direction-changing bidirectional nystagmus (มองขวาตากระตุกขวา มองซ้ายตากระตุกซ้าย) หรือมี Vertical nystagmus",
      "D. การสูญเสียการได้ยินชั่วคราวร่วมกับหูอื้อ"
    ],
    correct: 2,
    hint: "การตรวจคัดกรอง HINTS Exam (Head Impulse, Nystagmus, Test of Skew) เพื่อจับสัญญาณอันตรายของ Stroke",
    explanation: "Direction-changing gaze-evoked nystagmus, Pure vertical nystagmus หรือตรวจพบ Skew deviation เป็นสัญญาณอันตราย (Red flags) ของ Central vertigo (ก้านสมองหรือสมองน้อยขาดเลือด) ในขณะที่ Peripheral lesion มักพบ Unidirectional horizontal-torsional nystagmus ร่วมกับ Abnormal HIT"
  },
  {
    category: "Neurological PT",
    question: "ผู้ป่วยโรคปลอกประสาทเสื่อมแข็ง (Multiple Sclerosis: MS) มีอาการตามัวเฉียบพลัน กล้ามเนื้ออ่อนแรงลงอย่างมาก และมีอาการล้าขั้นรุนแรงหลังออกกำลังกายในห้องฝึกกายภาพบำบัดที่ไม่ได้เปิดเครื่องปรับอากาศ ภาวะนี้เรียกว่าอะไรและมีแนวทางการจัดการอย่างไร?",
    options: [
      "A. Myasthenic crisis ให้ทำ Plasmapheresis ทันที",
      "B. Uhthoff's phenomenon ให้ผู้ป่วยหยุดพักในห้องปรับอากาศเย็นและประคบเย็นเพื่อลดอุณหภูมิร่างกาย",
      "C. Lhermitte's sign ให้ยืดกล้ามเนื้อคอทันที",
      "D. Autonomic Dysreflexia ให้สวนปัสสาวะด่วน"
    ],
    correct: 1,
    hint: "ภาวะที่การนำสัญญาณประสาทใน Demyelinated axon ถูกบล็อกชั่วคราวเมื่ออุณหภูมิแกนกลางของร่างกายสูงขึ้น",
    explanation: "Uhthoff's phenomenon คือภาวะที่อาการทางระบบประสาทของผู้ป่วย MS กำเริบชั่วคราวเมื่ออุณหภูมิร่างกายสูงขึ้น (จากสภาพอากาศ การออกกำลังกาย หรือไข้) ทำให้อัตราเร็วการนำสัญญาณประสาทลดลง การแก้ไขคือหยุดพัก ดื่มน้ำเย็น และอยู่ในที่อากาศถ่ายเทเย็นสบาย อาการจะกลับคืนสู่ปกติได้เอง"
  },
  {
    category: "Musculoskeletal PT",
    question: "ผู้ป่วยหญิงอายุ 34 ปี มีอาการปวดและบวมบริเวณโคนนิ้วหัวแม่มือด้านหลัง (Radial styloid process) ปวดมากขึ้นเมื่อหยิบจับสิ่งของหรืออุ้มบุตร ตรวจ Finkelstein's test ให้ผลบวก เส้นเอ็นของกล้ามเนื้อคู่ใดเกิดการอักเสบในภาวะ De Quervain's tenosynovitis?",
    options: [
      "A. Extensor pollicis longus (EPL) และ Extensor carpi radialis longus (ECRL)",
      "B. Abductor pollicis longus (APL) และ Extensor pollicis brevis (EPB)",
      "C. Abductor pollicis brevis (APB) และ Flexor pollicis longus (FPL)",
      "D. Extensor digitorum communis (EDC) และ Extensor indicis (EI)"
    ],
    correct: 1,
    hint: "เส้นเอ็นที่วิ่งลอดผ่าน First dorsal compartment ของข้อมือ",
    explanation: "De Quervain's tenosynovitis เกิดจากการเสียดสีและอักเสบของเยื่อหุ้มเส้นเอ็นใน First dorsal extensor compartment ซึ่งประกอบด้วยเส้นเอ็นของ Abductor Pollicis Longus (APL) และ Extensor Pollicis Brevis (EPB)"
  },
  {
    category: "Musculoskeletal PT",
    question: "นักวิ่งมีอาการปวดข้อเข่าด้านนอก (Lateral knee pain) แถบเนื้อเยื่อเสียดสีกับ Lateral femoral epicondyle ขณะวิ่งลงน้ำหนักที่มุมงอเข่าประมาณ 30° ตรวจพบ Ober's test และ Noble compression test ให้ผลบวก พยาธิสภาพนี้น่าจะเกิดจากความผิดปกติของโครงสร้างใดมากที่สุด?",
    options: [
      "A. Pes anserinus bursa",
      "B. Iliotibial band (ITB friction syndrome)",
      "C. Popliteus tendon",
      "D. Biceps femoris tendon"
    ],
    correct: 1,
    hint: "โครงสร้างแถบพังผืดด้านข้างต้นขาที่เชื่อมต่อไปเกาะที่ Gerdy's tubercle",
    explanation: "Iliotibial Band Syndrome (ITBS) พบบ่อยในนักวิ่ง เกิดจากการเสียดสีของแถบ ITB กับ Lateral femoral condyle ในช่วงมุมเข่างอ 30° การตรวจพิเศษเฉพาะคือ Ober's test (ประเมินความตึงตัวของ TFL/ITB) และ Noble compression test"
  },
  {
    category: "Musculoskeletal PT",
    question: "ผู้ป่วยชายอายุ 52 ปี ปวดคอร้าวลงสะบักและแขน ขาสองข้างตึงเกร็ง ก้าวเดินไม่มั่นคงเหมือนเดินบนปุยเมฆ ตรวจพบ Positive Hoffmann's sign, Inverted supinator reflex และ Sustained ankle clonus ข้อห้ามเด็ดขาด (Absolute contraindication) สำหรับผู้ป่วยรายนี้คืออะไร?",
    options: [
      "A. การฝึกการทรงตัวในท่ายืน (Balance training)",
      "B. การดัดดัดกระดูกสันหลังระดับคอด้วยความเร็วสูง (High-Velocity Cervical Manipulation)",
      "C. การบริหารการหายใจแบบ Deep breathing",
      "D. การฝึกกระตุ้นกล้ามเนื้อปลายแขนด้วยกระแสไฟฟ้าบำบัดชนิด TENS"
    ],
    correct: 1,
    hint: "ผู้ป่วยมีอาการของ Cervical Spondylotic Myelopathy (การกดทับไขสันหลังระดับคอ บ่งชี้จาก UMN signs)",
    explanation: "การตรวจพบ Hoffmann's sign, Inverted supinator และ Clonus เป็นอาการของ UMN lesion จากภาวะ Cervical Myelopathy การทำ High-velocity spinal manipulation ที่บริเวณคอเป็นข้อห้ามเด็ดขาดอย่างยิ่ง เพราะอาจทำให้ไขสันหลังเสียหายเฉียบพลันจนเป็นอัมพาตทั้งตัว (Tetraplegia)"
  },
  {
    category: "Musculoskeletal PT",
    question: "ผู้ป่วยชายอายุ 30 ปี ล้มกระแทกพื้นในท่าข้อเท้าพลิกเข้าด้านในอย่างรุนแรง (Inversion injury) กดเจ็บชัดเจนที่บริเวณ Anterior Talofibular Ligament (ATFL) ตรวจ Anterior Drawer Test ของข้อเท้าพบ Laxity ชัดเจน การฝึกฟื้นฟูกล้ามเนื้อกลุ่มใดมีความสำคัญสูงสุดในการป้องกันข้อเท้าพลิกซ้ำเรื้อรัง (Chronic Ankle Instability)?",
    options: [
      "A. กล้ามเนื้อ Tibialis anterior และ Extensor hallucis longus",
      "B. กล้ามเนื้อ Fibularis (Peroneus) longus และ brevis ร่วมกับการฝึก Proprioception",
      "C. กล้ามเนื้อ Gastrocnemius และ Soleus",
      "D. กล้ามเนื้อ Flexor digitorum longus และ Tibialis posterior"
    ],
    correct: 1,
    hint: "กลุ่มกล้ามเนื้อด้านข้างของขาหนีบทำหน้าที่ Eversion เพื่อต้านแรงบิดหมุนเข้าด้านใน (Inversion)",
    explanation: "กล้ามเนื้อ Peroneus (Fibularis) longus และ brevis เป็น Dynamic stabilizer หลักในการต้านการบิด Inversion ของข้อเท้า การฝึกเสริมความแข็งแรงของกลุ่มนี้ร่วมกับการฝึกประสาทรับรู้ข้อต่อ (Proprioceptive / Neuromuscular control training) จำเป็นอย่างยิ่งในการป้องกันภาวะข้อเท้าหลวมเรื้อรัง"
  },
  {
    category: "Musculoskeletal PT",
    question: "ผู้ป่วยอายุ 65 ปี มีอาการปวดหลังส่วนล่างร้าวลงสะโพกและขาทั้งสองข้างเวลาเดิน อาการปวดและชาจะกำเริบเมื่อเดินบนทางราบได้ 200 เมตร แต่เมื่อก้มตัวเข็นรถเข็นในห้างหรือนั่งพัก อาการจะทุเลาลงอย่างรวดเร็ว (Shopping cart sign) การตรวจแยกโรคข้อใดที่ช่วยยืนยันภาวะ Neurogenic Claudication ได้ดีที่สุด?",
    options: [
      "A. Straight Leg Raise Test (SLR)",
      "B. Bicycle test of van Gelderen",
      "C. Patellar tendon reflex",
      "D. Thomas test"
    ],
    correct: 1,
    hint: "การปั่นจักรยานขณะโน้มตัวไปข้างหน้า (Flexion) จะเปิดช่อง Spinal canal กว้างขึ้น ทำให้ไม่มีอาการ แม้ว่าจะใช้กล้ามเนื้อขาหนักเท่าเดิม",
    explanation: "Bicycle test of van Gelderen ใช้แยกแยะระหว่าง Neurogenic claudication (Spinal stenosis) กับ Vascular claudication โดยผู้ป่วย Stenosis จะปั่นจักรยานในท่าก้มตัวได้โดยไม่ปวด แต่ถ้าให้ปั่นในท่ายืดตัวตรงจะปวดขา ส่วน Vascular claudication จะปวดเท่าเดิมไม่ว่าจะก้มหรือยืดตัว"
  },
  {
    category: "Musculoskeletal PT",
    question: "ผู้ป่วยยกของหนักเหนือศีรษะเป็นประจำ มีอาการปวดเมื่อยล้าที่ไหล่และแขน ชาบริเวณขอบด้านในของปลายแขนและนิ้วก้อย (C8-T1 distribution) ชีพจร Radial pulse เบาลงเมื่อยกแขนกางออกและหมุนไหล่ออกด้านนอกพร้อมหันหน้าไปฝั่งตรงข้าม ข้อใดคือกลุ่มโรคและโครงสร้างที่ถูกกดทับ?",
    options: [
      "A. Carpal tunnel syndrome จาก Median nerve",
      "B. Thoracic Outlet Syndrome (TOS) จากการกดทับ Brachial plexus และ Subclavian vessels",
      "C. Cubital tunnel syndrome จาก Ulnar nerve",
      "D. Rotator cuff arthropathy"
    ],
    correct: 1,
    hint: "การกดทับบริเวณช่องระหว่าง Scalene triangle, Costoclavicular space หรือ Pectoralis minor",
    explanation: "Thoracic Outlet Syndrome (TOS) เกิดจากการกดทับแขนงประสาท Brachial plexus (ส่วนใหญ่เป็น Lower trunk C8-T1) และหลอดเลือด Subclavian การทดสอบ Wright's test, Adson's test หรือ Roos test ให้ผลบวกบ่งชี้ถึงภาวะนี้อย่างชัดเจน"
  },
  {
    category: "Cardiopulmonary PT",
    question: "ผู้ป่วยภาวะหัวใจล้มเหลว (Heart Failure with reduced Ejection Fraction: HFrEF, LVEF 30%) ได้รับยา Beta-blocker เพื่อควบคุมโรค กำลังเข้าสู่โปรแกรมออกกำลังกายฟื้นฟูสมรรถภาพหัวใจ เครื่องมือวัดความหนักของการออกกำลังกายข้อใดมีความน่าเชื่อถือและเหมาะสมที่สุด?",
    options: [
      "A. การคำนวณ Target Heart Rate โดยใช้สูตร 220 - อายุ",
      "B. การประเมินระดับความเหนื่อยด้วย Borg Rating of Perceived Exertion (RPE Scale 6-20)",
      "C. การนับอัตราการหายใจต่อนาทีเพียงอย่างเดียว",
      "D. การตรวจค่า Pulse pressure"
    ],
    correct: 1,
    hint: "ยา Beta-blocker มีฤทธิ์กดอัตราการเต้นของหัวใจ (Blunted heart rate response)",
    explanation: "ยา Beta-blockers จะยับยั้งการตอบสนองของอัตราการเต้นของหัวใจต่อการออกกำลังกาย ทำให้สูตรคำนวณ Target Heart Rate แบบปกติใช้การไม่ได้ แนวทางปฏิบัติมาตรฐานคือการใช้ระดับความรู้สึกเหนื่อย Borg RPE scale (แนะนำที่ระดับ 11-14: Fairly light to Somewhat hard)"
  },
  {
    category: "Cardiopulmonary PT",
    question: "ผู้ป่วยหลังผ่าตัดเปิดทรวงอกผ่านแนวกระดูกอก (Median Sternotomy) เพื่อทำ CABG สัปดาห์แรก ข้อควรระวังและข้อห้ามตามหลัก Sternal Precautions ข้อใดถูกต้องที่สุด?",
    options: [
      "A. สามารถยกของหนักเกิน 10 กิโลกรัมได้ทันทีหากไม่รู้สึกเจ็บ",
      "B. ห้ามใช้สองแขนดันตัวขึ้นจากเก้าอี้ หลีกเลี่ยงการเอื้อมแขนไปข้างหลังพร้อมกันสองข้าง และจำกัดการยกของหนักไม่เกิน 2-4 กิโลกรัม",
      "C. ห้ามไอหรือจามเด็ดขาดเป็นเวลา 1 เดือน",
      "D. ต้องนอนนิ่งราบ 180 องศาตลอด 2 สัปดาห์แรก"
    ],
    correct: 1,
    hint: "ป้องกันแรงเฉือนและแรงดึงแยก (Distraction force) ต่อรอยลวดเชื่อมที่กระดูกอก",
    explanation: "Sternal precautions ในช่วง 6-8 สัปดาห์แรกมุ่งเน้นการป้องกันกระดูกอกแยก (Sternal instability): ห้ามยกของหนักเกิน 5-10 ปอนด์ (2-4 กก.), ห้ามผลัก/ดึงด้วยแขนเดียวหรือสองแขนแรงๆ (เช่น ยันตัวขึ้นจากเก้าอี้), หลีกเลี่ยงท่า Shoulder hyperextension/horizontal abduction พร้อมกัน และควรกอดหมอนแนบอกเวลาไอหรือจาม"
  },
  {
    category: "Cardiopulmonary PT",
    question: "ผู้ป่วยโรคหลอดเลือดแดงส่วนปลายตีบ (Peripheral Artery Disease: PAD) มีอาการปวดน่องรุนแรงขณะเดิน (Intermittent Claudication) ผลตรวจ Ankle-Brachial Index (ABI) ได้ 0.65 ข้อใดคือหลักการจัดโปรแกรมฝึกเดิน (Walking program) ที่ถูกต้องตามมาตรฐาน?",
    options: [
      "A. ให้เดินจนกระทั่งเริ่มมีอาการปวดเล็กน้อย แล้วหยุดพักทันทีก่อนที่จะปวดปานกลาง",
      "B. ให้เดินต่อเนื่องด้วยความเร็วสูงจนกระทั่งทนปวดไม่ไหวแล้วฝืนเดินต่อไปอีก 10 นาที",
      "C. ให้เดินจนกระทั่งเกิดอาการปวดระดับปานกลาง (Moderate claudication pain) แล้วจึงหยุดพักจนอาการปวดหายไป จากนั้นทำซ้ำเป็นรอบๆ รวมเวลาเดิน 30-45 นาที",
      "D. ห้ามผู้ป่วยออกกำลังกายเดินโดยเด็ดขาดเพราะจะทำให้หลอดเลือดอุดตันเพิ่ม"
    ],
    correct: 2,
    hint: "การกระตุ้นให้เกิดภาวะขาดเลือดระดับปานกลางชั่วคราว (Ischemia) ช่วยกระตุ้นการสร้างหลอดเลือดฝอยเชื่อมต่อ (Collateral circulation)",
    explanation: "การฟื้นฟูใน PAD แนะนำให้เดินบนลู่วิ่งหรือทางราบจนมีอาการปวดที่ระดับ Moderate claudication (ระดับ 3 จาก 4) แล้วหยุดพักให้นั่งหรือยืนจนอาการหาย จากนั้นเดินต่อเป็นรอบๆ การกระตุ้นให้เกิด Ischemia ระดับปานกลางเป็นสิ่งจำเป็นในการกระตุ้น Collateral neovascularization"
  },
  {
    category: "Cardiopulmonary PT",
    question: "ผู้ป่วยใส่ท่อช่วยหายใจใน ICU อยู่ระหว่างเตรียมการหย่าเครื่องช่วยหายใจ (Ventilator Weaning) พารามิเตอร์ Rapid Shallow Breathing Index (RSBI หรือ f/VT) ในข้อใดบ่งชี้ว่าผู้ป่วยมีความพร้อมและมีโอกาสหย่าเครื่องสำเร็จสูงที่สุด?",
    options: [
      "A. RSBI = 160 breaths/min/L",
      "B. RSBI = 120 breaths/min/L",
      "C. RSBI = 75 breaths/min/L",
      "D. RSBI = 220 breaths/min/L"
    ],
    correct: 2,
    hint: "ค่า RSBI ที่ต่ำกว่า 105 บ่งชี้ว่าผู้ป่วยหายใจได้ลึกและอัตราการหายใจไม่ถี่เกินไป",
    explanation: "Rapid Shallow Breathing Index (RSBI) คำนวณจาก อัตราการหายใจ (f) หารด้วย Tidal Volume ในหน่วยลิตร (VT) ค่า RSBI < 105 breaths/min/L เป็นตัวทำนายความสำเร็จในการ Weaning ที่มีความแม่นยำสูง หากค่า > 105 บ่งชี้ถึงภาวะหายใจตื้นและเร็ว เสี่ยงต่อการล้มเหลวในการถอดท่อหายใจ"
  },
  {
    category: "Pediatric PT",
    question: "ทารกแรกคลอดคลอดติดไหล่ ได้รับการวินิจฉัยเป็น Erb-Duchenne Palsy จากการบาดเจ็บของ Brachial plexus ระดับ C5-C6 แขนข้างที่ผิดปกติจะมีลักษณะท่าทางแบบใด (Waiter's tip position)?",
    options: [
      "A. Shoulder abduction, external rotation, elbow flexion, forearm supination",
      "B. Shoulder adduction, internal rotation, elbow extension, forearm pronation, wrist flexion",
      "C. Wrist drop อย่างเดียวโดยหัวไหล่ขยับได้ปกติ",
      "D. Claw hand deformity ร่วมกับสูญเสียกำลังนิ้วมือทั้งหมด"
    ],
    correct: 1,
    hint: "สูญเสียการทำงานของ Deltoid, Supraspinatus, Infraspinatus, Biceps และ Supinator",
    explanation: "การบาดเจ็บของรากประสาท C5-C6 (Upper trunk) ทำให้กล้ามเนื้อ Abductor/External rotator ของไหล่, Elbow flexor และ Forearm supinator อัมพาต ส่งผลให้แขนตกอยู่ในท่าตรงข้าม คือ Shoulder adducted/internally rotated, Elbow extended, Forearm pronated และ Wrist flexed (Waiter's tip posture)"
  },
  {
    category: "Pediatric PT",
    question: "เด็กหญิงอายุ 6 ขวบ ได้รับการวินิจฉัยว่าเป็น Cerebral Palsy สามารถเดินในร่มและชุมชนได้โดยต้องใช้อุปกรณ์ช่วยเดินแบบมีล้อ (Hand-held mobility device / Posterior walker) และต้องใช้รถเข็น (Wheelchair) เมื่อต้องเดินทางระยะไกลในชุมชน เด็กรายนี้จัดอยู่ในระดับใดตามเกณฑ์ GMFCS (Gross Motor Function Classification System)?",
    options: [
      "A. GMFCS Level I",
      "B. GMFCS Level II",
      "C. GMFCS Level III",
      "D. GMFCS Level IV"
    ],
    correct: 2,
    hint: "Level I เดินได้ไม่จำกัด, Level II เดินได้มีข้อจำกัด, Level III ต้องใช้อุปกรณ์ช่วยพยุงเดิน (Hand-held device), Level IV พึ่งพารถเข็นเป็นหลัก",
    explanation: "GMFCS Level III นิยามว่า เด็กสามารถเดินบนพื้นราบโดยใช้อุปกรณ์ช่วยเดินพยุงแขน (Hand-held mobility devices) ได้ด้วยตนเอง แต่อาจต้องใช้ Wheelchair สำหรับการเดินทางไกลหรือในที่ขรุขระ (Level II ไม่ต้องใช้ Hand-held device ในการเดินระยะสั้น)"
  },
  {
    category: "Pediatric PT",
    question: "ทารกอายุ 2 เดือน ได้รับการวินิจฉัยว่าเป็น Congenital Muscular Torticollis (CMT) ข้างขวา ตรวจพบก้อนคลำได้ที่กล้ามเนื้อ SCM ขวา ศีรษะเอียงไปทางด้านขวาและใบหน้าหมุนหันไปทางซ้าย การรักษาด้วยการจัดท่าและการยืดกล้ามเนื้อ (Stretching) ที่ถูกต้องควรทำอย่างไร?",
    options: [
      "A. เอียงศีรษะไปทางขวา (Right lateral flexion) และหมุนหน้าไปทางซ้าย (Left rotation)",
      "B. เอียงศีรษะไปทางซ้าย (Left lateral flexion) และหมุนหน้าไปทางขวา (Right rotation)",
      "C. ก้มคอสุดองศาพร้อมหมุนหน้าไปทางซ้าย",
      "D. ดัดดึงคอในแนวเหยียดตรงโดยไม่ต้องบิดหมุน"
    ],
    correct: 1,
    hint: "หน้าที่ของกล้ามเนื้อ SCM ข้างขวา คือ Lateral flex ไปทางขวา และ Rotate หน้าไปทางตรงข้าม (ซ้าย) ดังนั้นการยืดต้องทำในทิศตรงกันข้าม",
    explanation: "กล้ามเนื้อ SCM ด้านขวาทำหน้าที่เอียงคอขวาและหมุนหน้าซ้าย เมื่อเกิดการหดสั้น การยืดกล้ามเนื้อ (Passive stretch) จึงต้องทำในทิศทางตรงกันข้ามคือ เอียงคอไปทางซ้าย (Left lateral flexion) และหมุนใบหน้าหันกลับมาทางขวา (Right rotation)"
  },
  {
    category: "Geriatric PT",
    question: "ผู้สูงอายุ 78 ปี ได้รับการประเมินความเสี่ยงต่อการหกล้มด้วยแบบทดสอบ Timed Up and Go (TUG) Test ใช้เวลาทำทั้งหมด 17 วินาที ข้อใดคือการแปลผลและแนวทางการวางแผนการรักษาที่ถูกต้องที่สุด?",
    options: [
      "A. ผลทดสอบปกติ ไม่มีความเสี่ยงต่อการหกล้ม แนะนำให้ออกกำลังกายตามอัธยาศัย",
      "B. มีความเสี่ยงต่อการหกล้มสูง (High fall risk) ควรจัดโปรแกรมฝึก Balance training, Gait training และ Progressive resistance training",
      "C. บ่งชี้ว่ามีภาวะสมองเสื่อมรุนแรง ต้องส่งตัวไปพบจิตแพทย์ทันที",
      "D. แนะนำให้นั่งบนเตียงตลอดเวลาเพื่อป้องกันการหกล้ม 100%"
    ],
    correct: 1,
    hint: "จุดตัด (Cut-off score) ของ TUG Test ที่บ่งชี้ความเสี่ยงต่อการหกล้มในชุมชนคือ ≥ 12-13.5 วินาที",
    explanation: "ค่ามาตรฐาน TUG ในผู้สูงอายุอิสระมักน้อยกว่า 10-12 วินาที หากใช้เวลา ≥ 13.5-14 วินาที ถือว่ามีความเสี่ยงต่อการหกล้มสูง (High fall risk) ต้องได้รับการฝึกฟื้นฟูด้าน Balance, ความแข็งแรงของรยางค์ล่าง และปรับสภาพแวดล้อมเพื่อป้องกันการหกล้ม"
  },
  {
    category: "Geriatric PT",
    question: "ผู้ป่วยสูงอายุ 80 ปี วันที่ 2 หลังผ่าตัดเปลี่ยนข้อสะโพกเทียมจากภาวะกระดูกหัก เริ่มมีพฤติกรรมกระสับกระส่าย สับสนเวลาสถานที่ สมาธิสั้นมาก และอาการแปรปรวนเป็นช่วงๆ ตลอดทั้งวันโดยเฉพาะช่วงหัวค่ำ (Sundowning) ภาวะนี้คืออะไรและนักกายภาพบำบัดควรมีบทบาทอย่างไร?",
    options: [
      "A. Alzheimer's dementia ระยะท้าย ให้หยุดกายภาพบำบัดถาวร",
      "B. Delirium (ภาวะเพ้อเฉียบพลัน) ควรส่งเสริม Early mobilization อย่างปลอดภัยร่วมกับการ Re-orientation จัดสภาพแวดล้อมให้มีแสงสว่างสม่ำเสมอ",
      "C. Major Depressive Disorder ให้หลีกเลี่ยงการพูดคุยกับผู้ป่วย",
      "D. Normal Aging process ไม่ต้องจัดการใดๆ ปล่อยไว้จะหายเองใน 1 ชั่วโมง"
    ],
    correct: 1,
    hint: "ภาวะสับสนที่มีการเปลี่ยนแปลงเฉียบพลันและขึ้นๆ ลงๆ (Fluctuating) มักเกิดหลังการผ่าตัดหรือการติดเชื้อ",
    explanation: "Delirium เป็นภาวะฉุกเฉินทางสมองที่เกิดขึ้นเฉียบพลันและอาการแปรปรวน มีสมาธิบกพร่อง การทำ Non-pharmacological management เช่น การลุกขยับตัวเร็ว (Early mobility), การบอกเวลา/สถานที่ซ้ำๆ (Re-orientation), การเปิดม่านรับแสงกลางวัน และการให้นอนหลับเป็นเวลา ช่วยลดความรุนแรงได้ดีที่สุด"
  },
  {
    category: "Musculoskeletal PT",
    question: "ผู้ป่วยปวดข้อศอกด้านนอก (Lateral epicondylalgia / Tennis elbow) เจ็บมากขึ้นขณะกำมือและกระดกข้อมือขึ้นต้านแรง (Resisted wrist extension with radial deviation) กล้ามเนื้อข้อต่อชิ้นใดที่มักพบพยาธิสภาพการเสื่อมของเส้นเอ็น (Tendinosis) มากที่สุด?",
    options: [
      "A. Extensor carpi radialis longus (ECRL)",
      "B. Extensor carpi radialis brevis (ECRB)",
      "C. Flexor carpi ulnaris (FCU)",
      "D. Pronator teres"
    ],
    correct: 1,
    hint: "จุดเกาะต้นของกล้ามเนื้อนี้อยู่ที่ Lateral epicondyle และมีเส้นเอ็นเสียดสีกับหัว Capitulum ตลอดการขยับข้อศอก",
    explanation: "พยาธิสภาพหลักของ Tennis elbow เกิดจากการเสื่อมสภาพของเส้นใยคอลลาเจน (Angiofibroblastic tendinosis) ที่จุดเกาะต้นของกล้ามเนื้อ Extensor Carpi Radialis Brevis (ECRB) การรักษาทางกายภาพบำบัดเน้นการออกกำลังกายแบบ Eccentric loading ของ ECRB ร่วมกับ Scapular stabilization"
  },
  {
    category: "Musculoskeletal PT",
    question: "ผู้ป่วยมีอาการชาและปวดแสบร้อนบริเวณฝ่าเท้าและนิ้วเท้า โดยเฉพาะเวลาเดินลงน้ำหนัก เคาะบริเวณด้านหลังต่อ Medial Malleolus พบว่ามีอาการชาแปล๊บคล้ายไฟช็อตแล่นลงไปตามฝ่าเท้า (Positive Tinel's sign) พยาธิสภาพนี้น่าจะเกิดจากเส้นประสาทใดถูกกดทับ?",
    options: [
      "A. Common fibular (peroneal) nerve ในช่อง Fibular tunnel",
      "B. Posterior tibial nerve ในช่อง Tarsal tunnel",
      "C. Sural nerve บริเวณ Lateral malleolus",
      "D. Saphenous nerve บริเวณข้อเข่าด้านใน"
    ],
    correct: 1,
    hint: "Tarsal Tunnel Syndrome เกิดจากการกดทับเส้นประสาทที่วิ่งอ้อมหลังปุ่มตาตุ่มด้านใน",
    explanation: "Tarsal Tunnel Syndrome เกิดจากการกดทับของ Posterior Tibial Nerve (หรือแขนง Medial/Lateral plantar nerves) ภายใน Tarsal tunnel ใต้แถบ Flexor retinaculum หลังตาตุ่มใน ส่งผลให้มีอาการปวดแสบร้อนและชาบริเวณฝ่าเท้า ตรวจพบ Tinel's sign บวมกดเจ็บที่หลังตาตุ่มใน"
  },
  {
    category: "Cardiopulmonary PT",
    question: "ผู้ป่วยวัยรุ่นโรค Cystic Fibrosis มีเสมหะเหนียวข้นคั่งค้างในปอดเป็นจำนวนมาก นักกายภาพบำบัดสอนเทคนิค Autogenic Drainage (AD) เพื่อช่วยระบายเสมหะ ข้อใดเรียงลำดับ 3 ขั้นตอนของการฝึก AD ได้อย่างถูกต้อง?",
    options: [
      "A. Evacuate (ขับออก) -> Collect (รวบรวม) -> Unstick (แซะเสมหะ)",
      "B. Unstick (แซะเสมหะ) -> Collect (รวบรวม) -> Evacuate (ขับออก)",
      "C. Cough (ไอ) -> Huff (พ่นลม) -> Suction (ดูดเสมหะ)",
      "D. Hyperventilate (หายใจเร็ว) -> Hold breath (กลั้นหายใจ) -> Cough (ไอ)"
    ],
    correct: 1,
    hint: "เริ่มจากหายใจในปริมาตรปอดต่ำเพื่อสะกิดเสมหะส่วนปลาย แล้วย้ายมาปริมาตรปานกลางเพื่อรวมเสมหะ และปริมาตรสูงเพื่อดันเสมหะออก",
    explanation: "Autogenic Drainage แบ่งเป็น 3 ระยะ: 1) Unsticking phase หายใจที่ Low lung volume เพื่อแซะเสมหะจากหลอดลมส่วนปลาย, 2) Collecting phase หายใจที่ Mid lung volume เพื่อรวบรวมเสมหะเข้าสู่หลอดลมขนาดกลาง, และ 3) Evacuating phase หายใจที่ High lung volume ร่วมกับ Huffing เพื่อขับเสมหะออก"
  },
  {
    category: "Neurological PT",
    question: "ผู้ป่วยโรคกล้ามเนื้ออ่อนแรงชนิด Amyotrophic Lateral Sclerosis (ALS) ระยะปานกลาง กำลังฟื้นฟูสมรรถภาพเพื่อคงหน้าที่ของกล้ามเนื้อ หลักการออกกำลังกายเสริมความแข็งแรงข้อใดมีความปลอดภัยและเหมาะสมที่สุด?",
    options: [
      "A. เน้นการฝึก High-intensity Eccentric exercise จนกล้ามเนื้อเกิด Exhaustion",
      "B. ออกกำลังกายแบบ Moderate-intensity โดยเน้นกล้ามเนื้อกลุ่มที่มีกำลังตั้งแต่ระดับ Fair (Grade 3) ขึ้นไป และหลีกเลี่ยงการฝึกจนกล้ามเนื้อล้าเกินขีดจำกัด",
      "C. ให้ยกน้ำหนักหนักที่สุดแบบ 1-Repetition Maximum (1-RM) ซ้ำๆ",
      "D. สั่งให้ผู้ป่วยงดการเคลื่อนไหวทุกชนิดเพื่อถนอมเซลล์ Motor neuron"
    ],
    correct: 1,
    hint: "ใน ALS กล้ามเนื้อที่อ่อนแรงรุนแรง (< Grade 3) ไม่สามารถสร้างความแข็งแรงเพิ่มได้ และเสี่ยงต่อ Overwork damage",
    explanation: "ผู้ป่วย ALS มีการเสื่อมของ Motor neuron อย่างต่อเนื่อง การฝึกออกกำลังกายหนักเกินไปจะก่อให้เกิด Overwork damage และกล้ามเนื้อเสียหายถาวร จึงแนะนำให้ฝึก Moderate-intensity resistance ในกล้ามเนื้อที่ยังมีแรงต้านแรงโน้มถ่วงได้ (≥ Grade 3) ควบคู่กับ Aerobic เบาๆ และการยืดเหยียดป้องกันข้อยึด"
  },
  {
    category: "Musculoskeletal PT",
    question: "นักฟุตบอลได้รับบาดเจ็บข้อเข่าขณะบิดหมุนตัวร่วมกับงอเข่า มีเสียงลั่นในข้อและมีอาการ 'เข่าล็อค' (Joint locking) เหยียดเข่าไม่สุด ตรวจพบ Joint line tenderness ชัดเจน และทำ McMurray test ให้ผลบวก โครงสร้างที่น่าจะได้รับบาดเจ็บมากที่สุดคืออะไร?",
    options: [
      "A. Anterior Cruciate Ligament (ACL)",
      "B. Meniscus (หมอนรองข้อเข่า)",
      "C. Posterior Cruciate Ligament (PCL)",
      "D. Patellar tendon"
    ],
    correct: 1,
    hint: "อาการเข่าล็อค (Locking) และเจ็บตามแนวเส้นรอยต่อข้อต่อ (Joint line) เป็นอาการจำเพาะของโครงสร้างนี้",
    explanation: "การบาดเจ็บของ Meniscus (โดยเฉพาะ Bucket-handle tear) มักเกิดจากแรงบิดหมุนขณะงอเข่า ทำให้ชิ้นส่วนหมอนรองข้อที่ฉีกขาดไปขัดขวางการเหยียดข้อเข่า เกิดภาวะ True locking ร่วมกับมีอาการกดเจ็บตามแนว Joint line และ McMurray's test ให้ผลบวก"
  },
  {
    category: "Musculoskeletal PT",
    question: "ผู้ป่วยหลังผ่าตัดเย็บซ่อมเส้นเอ็น Supraspinatus ฉีกขาดขาดขนาดใหญ่ (Rotator Cuff Repair) สัปดาห์ที่ 2 อยู่ในช่วง Maximum Protection Phase การรักษาทางกายภาพบำบัดข้อใดเป็นข้อห้ามเด็ดขาด (Contraindication)?",
    options: [
      "A. การเคลื่อนไหวข้อไหล่แบบ Passive ROM ในแนวระนาบ Scapular plane",
      "B. การฝึกเกร็งกล้ามเนื้อไหล่แบบ Active-assisted ROM และ Active elevation ทันที",
      "C. การบริหารขยับข้อมือและกำมือเบาๆ (Wrist & Hand active pump)",
      "D. การใส่ Abduction sling เพื่อพยุงข้อไหล่ตามแพทย์สั่ง"
    ],
    correct: 1,
    hint: "ระยะแรกต้องปกป้องรอยเย็บเอ็นจากการถูกกระตุกดึง ห้ามให้กล้ามเนื้อ Supraspinatus ออกแรงหดตัวด้วยตนเอง",
    explanation: "ในช่วง 0-4 ถึง 6 สัปดาห์แรกหลังผ่าตัด Rotator Cuff Repair เส้นเอ็นที่เย็บซ่อมเข้ากับกระดูกยังไม่ติดแน่น การออกกำลังกายแบบ Active หรือ Active-assisted elevation ของข้อไหล่เป็นข้อห้ามเด็ดขาดเพราะทำให้เกิดแรงดึงรั้งจนรอยเย็บขาดซ้ำ อนุญาตให้ทำได้เฉพาะ Passive ROM ภายใต้ขอบเขตที่ปลอดภัยเท่านั้น"
  },
  {
    category: "Neurological PT",
    question: "ผู้ป่วยหมอนรองกระดูกทับเส้นประสาทระดับเอว มีอาการปวดหลังรุนแรง เริ่มมีอาการชาบริเวณรอบทวารหนักและอวัยวะเพศ (Saddle anesthesia) ร่วมกับปัสสาวะไม่ออกหรือราดโดยไม่รู้ตัว (Urinary retention / Overflow incontinence) และขาสองข้างอ่อนแรงเฉียบพลัน นักกายภาพบำบัดควรปฏิบัติอย่างไร?",
    options: [
      "A. ให้การรักษาด้วยเครื่องดึงหลัง (Mechanical Traction) ทันทีเพื่อคลายการกดทับ",
      "B. ฝึกทำท่า McKenzie Prone Press-ups ซ้ำๆ 20 ครั้ง",
      "C. สั่งระงับการรักษาทางกายภาพบำบัด และส่งตัวผู้ป่วยไปห้องฉุกเฉิน (ER) ทันทีเนื่องจากสงสัยภาวะ Cauda Equina Syndrome",
      "D. จัดท่ากอดเข่าชิดอก (Williams flexion exercise) แล้วให้กลับไปสังเกตอาการที่บ้าน"
    ],
    correct: 2,
    hint: "กลุ่มอาการกดทับกลุ่มรากประสาทหางม้า (Red flag emergency) ที่ต้องการการผ่าตัดคลายการกดทับฉุกเฉินภายใน 24-48 ชั่วโมง",
    explanation: "Saddle anesthesia ร่วมกับความผิดปกติของระบบขับถ่ายปัสสาวะ/อุจจาระ และ Motor deficit ขาสองข้าง เป็นอาการแสดงชัดเจนของ Cauda Equina Syndrome ซึ่งเป็นภาวะฉุกเฉินทางการแพทย์ (Surgical emergency) ต้องผ่าตัดฉุกเฉินเพื่อป้องกันการสูญเสียการควบคุมระบบขับถ่ายและอัมพาตขาถาวร ห้ามรักษาทางกายภาพบำบัดต่อเด็ดขาด"
  },
  {
    category: "Cardiopulmonary PT",
    question: "ก่อนเริ่มการทดสอบสมรรถภาพหัวใจด้วยการออกกำลังกาย (Clinical Exercise Testing / Stress Test) ในผู้ป่วยโรคหัวใจ ข้อใดถือเป็นข้อห้ามเด็ดขาด (Absolute Contraindication) ที่ต้องยกเลิกการทดสอบทันที?",
    options: [
      "A. ภาวะ Severe Symptomatic Aortic Stenosis หรือ Acute Myocardial Infarction ภายใน 2 วัน",
      "B. ความดันโลหิตขณะพัก 150/90 mmHg",
      "C. ผู้ป่วยมีอาการปวดข้อเข่าเล็กน้อยขณะเดิน",
      "D. ค่า Resting Heart Rate 88 ครั้งต่อนาที"
    ],
    correct: 0,
    hint: "ภาวะลิ้นหัวใจตีบรุนแรงจนมีอาการ หรือภาวะกล้ามเนื้อหัวใจตายเฉียบพลันที่ยังไม่คงที่",
    explanation: "ตามเกณฑ์ของ ACSM/AHA ข้อห้ามเด็ดขาดในการทำ Exercise Testing ได้แก่ Acute MI (< 2 วัน), Ongoing unstable angina, Uncontrolled cardiac arrhythmias, Active endocarditis, Acute pulmonary embolism และ Severe symptomatic aortic stenosis เนื่องจากเสี่ยงสูงมากต่อการเกิดหัวใจหยุดเต้นหรือเสียชีวิตเฉียบพลัน"
  },
  {
    category: "Pediatric PT",
    question: "เด็กหญิงอายุ 4 ขวบ มีความบกพร่องแต่กำเนิดแบบ Spina Bifida (Myelomeningocele) ระดับไขสันหลัง L4 มีกำลังกล้ามเนื้อ Quadriceps ระดับ Fair ถึง Good (Grade 3-4) และมีกำลังของ Tibialis anterior แต่ไม่มีการทำงานของ Gastroc-soleus และ Hamstrings การพยากรณ์ความสามารถในการเคลื่อนไหว (Functional prognosis) และอุปกรณ์ช่วยเดินที่เหมาะสมที่สุดคือข้อใด?",
    options: [
      "A. ต้องใช้รถเข็นตลอดชีวิต (Wheelchair bound) ไม่สามารถยืนลงน้ำหนักได้",
      "B. สามารถเดินในชุมชนได้ (Community ambulation) โดยใช้อุปกรณ์ดามข้อเท้า Ankle-Foot Orthosis (AFO) ร่วมกับไม้ค้ำยัน",
      "C. ต้องใช้ Hip-Knee-Ankle-Foot Orthosis (HKAFO) ร่วมกับ Walker เท่านั้น",
      "D. เดินได้ปกติโดยไม่ต้องใช้อุปกรณ์ประคองใดๆ ทั้งสิ้น"
    ],
    correct: 1,
    hint: "มีกล้ามเนื้อเหยียดเข่า (L3-L4 Quads) และกระดกข้อเท้า (L4 Tibialis anterior) ทำงานได้ดี",
    explanation: "เด็ก Myelomeningocele ระดับ L4 มีจุดเด่นคือมีกล้ามเนื้อเหยียดเข่า (L3-L4) แข็งแรงและมีแรงกระดกข้อเท้าขึ้น จึงสามารถล็อกข้อเข่าขณะยืนและก้าวเดินได้ แต่ขาดแรงถีบปลายเท้า (S1-S2) และเหยียดสะโพก จึงเหมาะสมที่สุดกับการใช้อุปกรณ์ AFO เพื่อพยุงข้อเท้าไม่ให้ทรุด ร่วมกับ Crutches สามารถก้าวเดินในชุมชนได้ดี"
  },
  {
    category: "Musculoskeletal PT",
    question: "ผู้ป่วยมีอาการปวดแสบใต้ส้นเท้าข้างขวา อาการรุนแรงที่สุดในก้าวแรกที่เหยียบพื้นหลังตื่นนอนตอนเช้า กดเจ็บชัดเจนที่ Medial calcaneal tubercle กลไกชีวกลศาสตร์ Windlass Mechanism ทำงานโดยอาศัยการเคลื่อนไหวของข้อต่อใดเพื่อเพิ่มความตึงตัวของ Plantar fascia?",
    options: [
      "A. การกระดกข้อเท้าลง (Plantarflexion)",
      "B. การกระดกเหยียดนิ้วหัวแม่เท้าขึ้น (Great toe dorsiflexion / extension)",
      "C. การบิดข้อเท้าออกด้านนอก (Eversion)",
      "D. การงอนิ้วเท้าจิกพื้น (Toe flexion)"
    ],
    correct: 1,
    hint: "การเหยียดนิ้วโป้งเท้าขึ้นจะดึงรั้งแถบพังผืดใต้ฝ่าเท้าให้ตึงและยกส่วนโค้งของฝ่าเท้าสูงขึ้น",
    explanation: "Windlass Mechanism เกิดขึ้นเมื่อนิ้วหัวแม่เท้ากระดกเหยียดขึ้น (Great toe extension) ทำให้แถบพังผืด Plantar fascia ถูกดึงม้วนตึงรอบหัวกระดูก Metatarsal head ส่งผลให้ส่วนโค้งของเท้า (Medial longitudinal arch) ยกตัวสูงขึ้นและล็อกข้อต่อเท้าให้มั่นคงเพื่อส่งแรงถีบตัวในจังหวะ Push-off"
  },
  {
    category: "Neurological PT",
    question: "ข้อใดเปรียบเทียบความแตกต่างระหว่างภาวะ Spasticity และภาวะ Rigidity ได้ถูกต้องตามหลักสรีรวิทยาการเคลื่อนไหว?",
    options: [
      "A. Spasticity ขึ้นอยู่กับความเร็วในการยืด (Velocity-dependent) เกิดจากรอยโรค UMN / Pyramidal tract ขณะที่ Rigidity ไม่ขึ้นกับความเร็วในการยืด (Velocity-independent) เกิดจากรอยโรค Basal ganglia",
      "B. Spasticity พบแรงต้านเท่ากันทุกทิศทางการเคลื่อนไหวแบบท่อตะกั่ว (Lead-pipe)",
      "C. Rigidity พบปรากฏการณ์ Clasp-knife phenomenon เมื่อถูกดัดยืดเร็วๆ",
      "D. Spasticity เกิดจากความผิดปกติของสารสื่อประสาท Dopamine ใน Substantia nigra โดยตรง"
    ],
    correct: 0,
    hint: "Spasticity ยิ่งยืดเร็วยิ่งต้านมาก (Velocity-dependent) ส่วน Rigidity ต้านสม่ำเสมอไม่ว่าจะยืดช้าหรือเร็ว",
    explanation: "Spasticity เป็นอาการแสดงของ Upper Motor Neuron lesion มีลักษณะเด่นคือ Velocity-dependent hypertonia ยิ่งขยับเร็วแรงต้านยิ่งสูง และมักมีทิศทางจำเพาะ (Clasp-knife) ส่วน Rigidity เกิดจาก Extrapyramidal / Basal ganglia lesion มีแรงต้านคงที่ตลอดช่วงการเคลื่อนไหว ไม่ขึ้นกับความเร็ว (Lead-pipe หรือ Cogwheel)"
  },
  {
    category: "Geriatric PT",
    question: "ตามเกณฑ์มาตรฐานสากล EWGSOP2 (European Working Group on Sarcopenia in Older People) ขั้นตอนแรกในการคัดกรองเพื่อระบุความน่าจะเป็นของภาวะ Sarcopenia (Probable Sarcopenia) ในผู้สูงอายุคือข้อใด?",
    options: [
      "A. การวัดความหนาแน่นของกระดูกด้วยเครื่อง DEXA Scan",
      "B. การตรวจพบการลดลงของกำลังกล้ามเนื้อ (Low Muscle Strength) เช่น การวัดแรงบีบมือ (Grip strength) หรือ Chair stand test",
      "C. การตรวจวัดปริมาณมวลไขมันใต้ชั้นผิวหนัง",
      "D. การเจาะตรวจระดับฮอร์โมนเทสโทสเตอโรนในเลือด"
    ],
    correct: 1,
    hint: "นิยามใหม่เน้นที่ 'คุณภาพและการทำงานของกล้ามเนื้อ' (Strength) มาก่อนการวัดปริมาณมวลกล้ามเนื้อ (Muscle mass)",
    explanation: "เกณฑ์ EWGSOP2 กำหนดให้การตรวจพบ Low Muscle Strength (ประเมินจาก Grip strength ต่ำกว่า 27 kg ในเพศชาย หรือต่ำกว่า 16 kg ในเพศหญิง หรือลุกยืนจากเก้าอี้ 5 ครั้งช้ากว่า 15 วินาที) เป็นเกณฑ์หลักขั้นแรกในการบ่งชี้ว่ามีภาวะ Probable Sarcopenia ก่อนจะส่งตรวจยืนยันปริมาณมวลกล้ามเนื้อต่อไป"
  },
  {
    category: "Musculoskeletal PT",
    question: "เด็กหญิงวัยรุ่นอายุ 13 ปี ได้รับการวินิจฉัยว่าเป็น Adolescent Idiopathic Scoliosis (AIS) ตรวจวัดภาพรังสีพบมุม Cobb's angle เท่ากับ 32 องศา และประเมิน Risser sign ได้ Grade 1 (กระดูกยังมีการเจริญเติบโตอีกมาก) แนวทางการรักษามาตรฐานที่เหมาะสมที่สุดคือข้อใด?",
    options: [
      "A. ให้การรักษาด้วยการผ่าตัดเชื่อมกระดูกสันหลัง (Spinal Fusion) ทันที",
      "B. การตัดเสื้อเกราะดามลำตัว (Spinal Orthosis / Bracing เช่น TLSO) ร่วมกับ Physiotherapeutic Scoliosis-Specific Exercises (PSSE)",
      "C. ให้หยุดเรียนและนอนพักบนเตียงนิ่งๆ เป็นเวลา 6 เดือน",
      "D. เฝ้าติดตามดูอาการอย่างเดียวโดยไม่ต้องใส่อุปกรณ์ดามหรือออกกำลังกาย"
    ],
    correct: 1,
    hint: "มุม Cobb's angle อยู่ในช่วง 25-45 องศา และโครงกระดูกยังเจริญไม่เต็มที่ (Risser 0-2) คือข้อบ่งชี้หลักของการใส่ Brace",
    explanation: "ข้อบ่งชี้มาตรฐานของการใส่เสื้อเกราะดามหลัง (Bracing) คือ มุมโค้ง Cobb's angle อยู่ระหว่าง 25°-45° ในผู้ป่วยที่กระดูกยังโตไม่เต็มที่ (Risser grade 0-2) เพื่อป้องกันไม่ให้มุมคดเพิ่มขึ้น ร่วมกับการทำกายภาพบำบัดเฉพาะทางสำหรับกระดูกสันหลังคด (เช่น Schroth method) การผ่าตัดจะพิจารณาเมื่อมุมโค้ง > 45°-50°"
  },
  {
    category: "Cardiopulmonary PT",
    question: "ผู้ป่วยหญิงหลังผ่าตัดมะเร็งเต้านมข้างซ้ายร่วมกับเลาะต่อมน้ำเหลืองที่รักแร้ออก (Axillary Lymph Node Dissection) มีอาการแขนซ้ายบวมจากภาวะ Lymphedema ข้อห้ามและข้อควรระวังสำคัญในการดูแลแขนข้างซ้ายข้อใดถูกต้องที่สุด?",
    options: [
      "A. หลีกเลี่ยงการวัดความดันโลหิต การเจาะเลือดฉีดยา และการสะพายกระเป๋าหนักที่แขนข้างซ้าย",
      "B. ประคบถุงน้ำแข็งเย็นจัดที่ต้นแขนข้างซ้ายวันละ 2 ชั่วโมง",
      "C. ใส่ปลอกแขนรัดแน่นชนิดผ้ายืด Long-stretch ในเวลากลางคืนขณะนอนหลับ",
      "D. บีบนวดรีดน้ำเหลืองจากบริเวณต้นแขนลงสู่ปลายนิ้วมืออย่างรวดเร็ว"
    ],
    correct: 0,
    hint: "ป้องกันการบาดเจ็บต่อผิวหนัง การติดเชื้อ และแรงดันบีบขัดขวางทางเดินน้ำเหลืองที่บกพร่อง",
    explanation: "แขนข้างที่มีความเสี่ยงหรือมีภาวะ Lymphedema ต้องได้รับการป้องกันไม่ให้เกิดการบาดเจ็บหรือติดเชื้อ (Cellulitis): ห้ามวัดความดันโลหิต ห้ามเจาะเลือดหรือฉีดยา หลีกเลี่ยงของมีคม และไม่สวมใส่เสื้อผ้าหรือเครื่องประดับที่รัดแน่น ส่วนการระบายน้ำเหลือง (MLD) ต้องทำอย่างนุ่มนวลจากส่วนต้นไปหาส่วนปลายและระบายเข้าสู่ต่อมน้ำเหลืองข้างที่ปกติ"
  },
  {
    category: "Neurological PT",
    question: "ผู้ป่วยเมาสุราแล้วหลับพับไปโดยเอาแขนพาดขอบพนักเก้าอี้ตลอดคืน ตื่นเช้ามาพบว่าข้อมือตก กระดกข้อมือและนิ้วมือไม่ขึ้น (Wrist drop & Finger drop) ชาบริเวณง่ามมือด้านหลังระหว่างนิ้วโป้งกับนิ้วชี้ แต่กำลังกล้ามเนื้อ Triceps ยังปกติ พยาธิสภาพนี้น่าจะเกิดจากเส้นประสาทใดถูกกดทับและที่ระดับใด?",
    options: [
      "A. Median nerve ที่ Carpal tunnel",
      "B. Radial nerve บริเวณ Spiral groove ของกระดูกต้นแขน (Saturday night palsy)",
      "C. Ulnar nerve ที่ Cubital tunnel",
      "D. Musculocutaneous nerve ใต้รักแร้"
    ],
    correct: 1,
    hint: "แขนงประสาทที่ไปเลี้ยง Triceps แตกแขนงออกไปก่อนที่เส้นประสาทจะวิ่งเข้า Spiral groove",
    explanation: "Radial nerve palsy บริเวณ Spiral groove (Saturday night palsy) จะทำให้กล้ามเนื้อ Brachioradialis, Wrist extensors และ Finger extensors เป็นอัมพาตจนเกิด Wrist drop แต่กล้ามเนื้อ Triceps จะไม่ได้รับผลกระทบเนื่องจากแขนงประสาทที่ไปเลี้ยง Triceps แตกออกมาตั้งแต่ระดับสูงเหนือ Spiral groove"
  },
  {
    category: "Musculoskeletal PT",
    question: "ภาพถ่ายรังสีระนาบเฉียง (Oblique X-ray) ของกระดูกสันหลังระดับเอว แสดงรอยแตกหักคล้ายปลอกคอของรูปสุนัข 'Scottie Dog Fracture' ภาวะนี้คือโรคใดและรอยแตกเกิดขึ้นที่โครงสร้างกระดูกส่วนใด?",
    options: [
      "A. Spondylolysis ที่บริเวณ Pars Interarticularis",
      "B. Spondylolisthesis ที่บริเวณ Spinous process",
      "C. Ankylosing spondylitis ที่บริเวณ Sacroiliac joint",
      "D. Lumbar disc herniation ที่บริเวณ Annulus fibrosus"
    ],
    correct: 0,
    hint: "การแตกหักระดับความเค้นของ Pars interarticularis พบบ่อยในนักยิมนาสติกหรือผู้ที่แอ่นหลังซ้ำๆ",
    explanation: "Spondylolysis คือการแตกหักหรือบกพร่องของกระดูกบริเวณ Pars Interarticularis (ส่วนใหญ่ระดับ L5) ในภาพถ่ายเอกซเรย์ท่า Oblique จะเห็นลักษณะคอสุนัข Scottie dog มีรอยร้าว (Collar on the Scottie dog) หากกระดูกเคลื่อนตัวหลุดไปด้านหน้าจะกลายเป็นภาวะ Spondylolisthesis"
  },
  {
    category: "Cardiopulmonary PT",
    question: "ผู้ป่วยมีแผลเรื้อรังที่บริเวณเหนือตาตุ่มด้านใน (Medial malleolus) แผลมีขอบเขตไม่เรียบ มีน้ำเหลืองซึมปริมาณมาก (Heavy exudate) ผิวหนังรอบแผลมีสีน้ำตาลคล้ำจากการสะสมของเม็ดเลือดแดงที่แตกสลาย (Hemosiderin staining) แผลนี้เป็นแผลหลอดเลือดชนิดใดและการรักษาทางกายภาพบำบัดที่สำคัญคือข้อใด?",
    options: [
      "A. Arterial Ulcer ควรรักษาโดยห้ามยกขาสูงเด็ดขาด",
      "B. Venous Stasis Ulcer ควรรักษาด้วยการบำบัดด้วยการกดรัด (Compression therapy) ร่วมกับการยกขาสูงและฝึกปั๊มข้อเท้า",
      "C. Diabetic Neuropathic Ulcer รักษาโดยการใส่รองเท้าส้นสูง",
      "D. Pressure Injury Stage 4 รักษาด้วยการนวดกดจุดรอบแผล"
    ],
    correct: 1,
    hint: "Hemosiderin staining ร่วมกับแผลที่มี Exudate มากบริเวณตาตุ่มในเป็นลักษณะจำเพาะของความดันหลอดเลือดดำสูง",
    explanation: "Venous ulcer เกิดจากภาวะหลอดเลือดดำบกพร่องเรื้อรัง เลือดคั่งสะสมจนเม็ดเลือดแดงแตกเกิดสาร Hemosiderin ย้อมผิวเป็นสีน้ำตาล แผลมักแฉะ มีน้ำเหลืองมาก การรักษาหลักคือ Compression therapy (เช่น ผ้ายืดรัดหลายชั้น Multi-layer bandaging) เพื่อช่วยให้เลือดดำไหลกลับหัวใจ ร่วมกับการยกขาสูงเมื่อนั่งหรือนอน"
  },
  {
    category: "Pediatric PT",
    question: "ทารกแรกเกิดได้รับการตรวจคัดกรองภาวะข้อสะโพกหลุดแต่กำเนิด (Developmental Dysplasia of the Hip: DDH) พบว่าการตรวจ Ortolani Test ให้ผลบวก (ได้ยินเสียง Clunk ขณะกางสะโพกออก) อุปกรณ์ประคองข้อสะโพก Pavlik Harness ควรจัดข้อสะโพกให้อยู่ในท่าทางใดเพื่อรักษาความมั่นคงของหัวกระดูกต้นขาในเบ้าสะโพก?",
    options: [
      "A. Hip Extension และ Adduction",
      "B. Hip Flexion (งอประมาณ 90°-100°) ร่วมกับ Controlled Abduction (กางสะโพก)",
      "C. Full Extension และ Internal rotation",
      "D. Hip Adduction และ External rotation"
    ],
    correct: 1,
    hint: "ท่าทางที่ดันหัวกระดูก Femur เข้าสู่กึ่งกลางของเบ้า Acetabulum ลึกที่สุดอย่างเป็นธรรมชาติ",
    explanation: "Pavlik Harness ทำงานโดยการล็อกข้อสะโพกให้อยู่ในท่า Flexion (ประมาณ 90°-100°) และ Abduction (ประมาณ 40°-60°) ซึ่งเป็นตำแหน่ง Safe zone ที่ทำให้หัวกระดูก Femoral head ถูกจัดวางลึกเข้าไปในเบ้า Acetabulum อย่างมั่นคง และช่วยส่งเสริมการเจริญของเบ้าสะโพก"
  },
  {
    category: "Neurological PT",
    question: "ผู้ป่วยโรคหลอดเลือดสมองน้อย (Cerebellar Infarction) ข้างขวา มีอาการเดินเซอย่างรุนแรง ตรวจร่างกายด้านการเคลื่อนไหวจะพบอาการแสดงทางคลินิกข้อใดชัดเจนที่สุดที่ซีกขวาของร่างกาย?",
    options: [
      "A. Resting tremor และ Cogwheel rigidity",
      "B. Dysmetria (กะระยะไม่ถูกจากการตรวจ Finger-to-nose), Dysdiadochokinesia และ Intention tremor",
      "C. Chorea และ Hemiballismus",
      "D. Flaccid paralysis ร่วมกับสูญเสียความรู้สึกแบบสมบูรณ์"
    ],
    correct: 1,
    hint: "ความผิดปกติของสมองน้อย (Cerebellum) จะส่งผลต่อร่างกาย 'ข้างเดียวกับรอยโรค' (Ipsilateral) ด้าน Coordination",
    explanation: "พยาธิสภาพของ Cerebellum ทำให้สูญเสียการประสานสัมพันธ์ของการเคลื่อนไหว (Ataxia) อาการสำคัญได้แก่ Dysmetria (Past-pointing ใน Finger-to-nose หรือ Heel-to-shin test), Dysdiadochokinesia (ขยับมือคว่ำหงายสลับเร็วๆ ไม่ได้) และ Intention tremor (สั่นเมื่อเข้าใกล้วัตถุเป้าหมาย) โดยเกิดขึ้นในข้างเดียวกับรอยโรค"
  },
  {
    category: "Musculoskeletal PT",
    question: "นักกีฬาขว้างพุ่งแหลนมีอาการปวดลึกๆ ในข้อไหล่ด้านบนและด้านหน้า รู้สึกข้อไหล่หลวมและมีเสียงคลิกในข้อขณะง้างแขนขว้าง นักกายภาพบำบัดสงสัยภาวะฉีกขาดของเยื่อหุ้มข้อด้านบนส่วนหน้าไปหลัง (SLAP Lesion) การทดสอบพิเศษข้อใดมีความจำเพาะในการตรวจหารอยโรคนี้?",
    options: [
      "A. O'Brien's Active Compression Test",
      "B. Hawkins-Kennedy Test",
      "C. Neer Impingement Test",
      "D. Drop Arm Test"
    ],
    correct: 0,
    hint: "จุดเกาะของเส้นเอ็น Biceps Long Head ที่ยึดโยงกับ Superior Labrum ถูกดึงรั้งขณะหมุนแขนเข้าด้านในและต้านแรงกด",
    explanation: "O'Brien's Active Compression Test เป็นการตรวจพิเศษที่มีความไวและความจำเพาะสูงในการประเมินภาวะ SLAP tear (Superior Labral tear from Anterior to Posterior) โดยทดสอบแรงต้านแขนในท่า Glenohumeral internal rotation เทียบกับ external rotation อาการปวดลึกในข้อที่หายไปในท่าหมุนแขนออกจะบ่งชี้ผลบวก"
  },
  {
    category: "Cardiopulmonary PT",
    question: "ผู้ป่วยหลังผ่าตัดช่องท้องส่วนบน (Upper Abdominal Surgery) วันที่ 1 มีความเสี่ยงสูงต่อการเกิดภาวะปอดแฟบ (Atelectasis) การสอนผู้ป่วยใช้อุปกรณ์ Incentive Spirometer (Sustained Maximal Inspiration: SMI) ที่ถูกต้องควรมีขั้นตอนอย่างไร?",
    options: [
      "A. ให้ผู้ป่วยเป่าลมหายใจออกทางปากเข้าสู่อุปกรณ์อย่างรวดเร็วและแรงที่สุด",
      "B. อมกระบอกสูบให้สนิท สูดลมหายใจเข้าช้าๆ ลึกๆ ให้ลูกสูบลอยขึ้นจนสุดแล้วกลั้นหายใจค้างไว้ 3-5 วินาที ก่อนผ่อนลมออกช้าๆ",
      "C. หายใจเข้าออกตื้นๆ ถี่ๆ 30 ครั้งติดต่อกันโดยไม่ต้องกลั้นหายใจ",
      "D. ปรับแรงต้านอุปกรณ์สูงสุดแล้วหายใจเข้าสั้นๆ"
    ],
    correct: 1,
    hint: "เทคนิค SMI เน้นการสร้างความดันลบในเยื่อหุ้มปอดแบบต่อเนื่องเพื่อขยายถุงลมส่วนล่างที่ยุบตัว",
    explanation: "Incentive Spirometry ทำงานด้วยหลักการ Sustained Maximal Inspiration (SMI) โดยให้ผู้ป่วยหายใจเข้าทางปากอย่างช้าๆ ลึกๆ เพื่อให้เกิดการกระจายตัวของอากาศเข้าสู่ถุงลมปอดส่วนล่างอย่างสม่ำเสมอ และต้องกลั้นหายใจค้างไว้ 3-5 วินาทีที่จุดสิ้นสุดการหายใจเข้า เพื่อเพิ่มเวลาให้ถุงลมที่แฟบได้เปิดขยายตัว"
  },
  {
    category: "Neurological PT",
    question: "ผู้ป่วยสูงอายุประสบอุบัติเหตุทางรถยนต์ เกิดการสะบัดคอไปด้านหลังอย่างรุนแรง (Hyperextension injury) ตรวจพบว่าแขนสองข้างมีอาการอ่อนแรงและสูญเสียการรับความรู้สึกอย่างรุนแรง ขณะที่ขาสองข้างยังพอขยับก้าวเดินได้และมีความรู้สึกเกือบปกติ ภาวะนี้คือกลุ่มอาการไขสันหลังบาดเจ็บชนิดใด?",
    options: [
      "A. Anterior Cord Syndrome",
      "B. Central Cord Syndrome",
      "C. Posterior Cord Syndrome",
      "D. Conus Medullaris Syndrome"
    ],
    correct: 1,
    hint: "รอยโรคเกิดขึ้นบริเวณกึ่งกลางของไขสันหลังระดับคอ ซึ่งเป็นบริเวณที่เส้นใยประสาทควบคุมรยางค์บนเรียงตัวอยู่ด้านใน",
    explanation: "Central Cord Syndrome พบบ่อยในผู้สูงอายุที่มีภาวะกระดูกคอเสื่อม (Cervical spondylosis) แล้วเกิดอุบัติเหตุกระแทกในท่า Hyperextension ส่งผลให้เกิดการบาดเจ็บที่แกนกลางของไขสันหลัง ลักษณะทางคลินิกที่จำเพาะคือ การสูญเสียการทำงานของแขนและมือรุนแรงกว่าขาอย่างเด่นชัด (Upper extremity impairment > Lower extremity)"
  },
  {
    category: "Musculoskeletal PT",
    question: "พนักงานออฟฟิศมีอาการชาและปวดแสบร้อนที่นิ้วหัวแม่มือ นิ้วชี้ นิ้วกลาง และครึ่งหนึ่งของนิ้วนางด้านฝ่ามือ มักตื่นขึ้นมาสะบัดมือตอนดึก ตรวจพบ Thenar atrophy การใช้อุปกรณ์ดามข้อมือ (Wrist Splint) ในเวลากลางคืนควรจัดข้อมือให้อยู่ในมุมใดจึงจะลดแรงดันในโพรง Carpal tunnel ได้ดีที่สุด?",
    options: [
      "A. ท่างอข้อมือสุดองศา (Wrist Flexion 45°)",
      "B. ท่าตรงแนวระนาบเป็นกลาง (Neutral 0° ถึง Extension ไม่เกิน 5°)",
      "C. ท่ากระดกข้อมือขึ้นสุดองศา (Wrist Extension 40°)",
      "D. ท่าบิดเบนข้อมือไปทางฝั่งนิ้วก้อย (Ulnar deviation 30°)"
    ],
    correct: 1,
    hint: "แรงดันของของเหลวภายใน Carpal tunnel จะต่ำที่สุดเมื่อข้อมืออยู่ในแนวระนาบตรง",
    explanation: "การศึกษาทางชีวกลศาสตร์พบว่า Carpal Tunnel Pressure จะมีค่าต่ำที่สุดเมื่อข้อมืออยู่ในตำแหน่ง Neutral (0° ถึง 5° Extension) การงอข้อมือ (Flexion) หรือกระดกข้อมือ (Extension) มากเกินไปจะทำให้แรงดันในโพรงเพิ่มสูงขึ้นหลายเท่าและกดทับ Median nerve มากยิ่งขึ้น"
  },
  {
    category: "Pediatric PT",
    question: "การตรวจ Silfverskiöld Test ในเด็กที่มีภาวะเดินเขย่งปลายเท้า (Toe Walking) ตรวจพบว่าเมื่อเหยียดเข่าตรงสามารถกระดกข้อเท้าขึ้น (Dorsiflexion) ได้เพียง -5° แต่เมื่องอเข่า 90° สามารถกระดกข้อเท้าขึ้นได้ถึง 15° ผลการตรวจนี้บ่งชี้ถึงความตึงตัวหดสั้นของกล้ามเนื้อชิ้นใด?",
    options: [
      "A. กล้ามเนื้อ Soleus ชิ้นเดียว",
      "B. กล้ามเนื้อ Gastrocnemius ข้ามสองข้อต่อ (Isolated Gastrocnemius tightness)",
      "C. กล้ามเนื้อ Tibialis posterior",
      "D. มีการติดแข็งของกระดูกข้อต่อ Talocrural joint (Bony block)"
    ],
    correct: 1,
    hint: "กล้ามเนื้อ Gastrocnemius ข้ามทั้งข้อเข่าและข้อเท้า เมื่อหย่อนข้อเข่าความตึงจะคลายตัวลง แต่ Soleus เกาะใต้ข้อเข่าจึงไม่เปลี่ยนตามมุมเข่า",
    explanation: "Silfverskiöld Test ใช้แยกความตึงตัวระหว่าง Gastrocnemius และ Soleus: หากงอเข่าแล้วองศากระดกข้อเท้าเพิ่มขึ้นอย่างชัดเจน แสดงว่าเป็นความผิดปกติจาก Gastrocnemius tightness (เพราะการงอเข่าทำให้ Gastrocnemius หย่อนตัว) แต่ถ้าทั้งงอเข่าและเหยียดเข่าไม่สามารถกระดกข้อเท้าได้เท่ากัน แสดงว่าเป็นจาก Soleus หรือ Achilles tendon contracture"
  },
  {
    category: "Geriatric PT",
    question: "ผู้ป่วยสูงอายุ 76 ปี มีอาการเดินผิดปกติในลักษณะเดินซอยเท้าลำตัวติดพื้นคล้ายเท้าถูกแม่เหล็กดูดติดพื้น (Magnetic gait / Gait apraxia) ร่วมกับมีภาวะกลั้นปัสสาวะไม่อยู่ (Urinary incontinence) และมีความจำเสื่อมลงอย่างรวดเร็ว (Cognitive impairment) อาการทั้ง 3 ประการนี้เป็นลักษณะจำเพาะของภาวะใด?",
    options: [
      "A. Normal Pressure Hydrocephalus (NPH)",
      "B. Amyotrophic Lateral Sclerosis (ALS)",
      "C. Guillain-Barré Syndrome",
      "D. Myasthenia Gravis"
    ],
    correct: 0,
    hint: "กลุ่มอาการ 3 อย่างของ Hakim-Adams triad: 'Wet, Wobbly, and Wacky'",
    explanation: "Normal Pressure Hydrocephalus (NPH) มีลักษณะคลาสสิกตาม Hakim-Adams triad คือ 1) ความผิดปกติของการเดิน (Magnetic gait/Apraxia), 2) ภาวะสมองเสื่อม (Dementia), และ 3) ภาวะกลั้นปัสสาวะไม่ได้ (Urinary incontinence) ผู้ป่วยกลุ่มนี้สามารถรักษาให้หายกลับคืนได้ด้วยการผ่าตัดใส่สายระบายน้ำไขสันหลัง (VP Shunt)"
  },
  {
    category: "Musculoskeletal PT",
    question: "ผู้ป่วยประสบอุบัติเหตุทางรถยนต์โดยหน้าแข้งกระแทกกับแผงหน้ารถ (Dashboard injury) ขณะข้อเข่างอ 90 องศา ตรวจพบกระดูก Tibia ทรุดเลื่อนไปด้านหลัง (Positive Posterior Sag Sign / Godfrey's test) การฟื้นฟูกายภาพบำบัดข้อใดเป็นข้อห้ามที่ต้องระวังในช่วงต้นเพื่อไม่ให้เอ็น PCL ที่บาดเจ็บถูกยืดทำลาย?",
    options: [
      "A. การฝึกเกร็งกล้ามเนื้อ Quadriceps แบบ Isometrics",
      "B. การออกกำลังกายงอข้อเข่าต้านแรงแบบเปิด (Open Kinetic Chain Resisted Hamstring curls)",
      "C. การบริหารข้อเท้า Ankle pump",
      "D. การฝึกเกร็งกระดกขาขึ้นตรง (Straight Leg Raise) ในท่านอนหงาย"
    ],
    correct: 1,
    hint: "การหดตัวของ Hamstring จะดึงกระดูก Tibia ถอยไปด้านหลัง ซึ่งเพิ่มความเค้นต่อเส้นเอ็น PCL โดยตรง",
    explanation: "เส้นเอ็นไขว้หลัง (PCL) ทำหน้าที่ป้องกันไม่ให้ Tibia เลื่อนไปทางด้านหลัง การออกกำลังกายแบบ Open Kinetic Chain Hamstring flexion จะสร้างแรงดึงให้ Tibia เคลื่อนไปทางด้านหลังอย่างรุนแรง (Posterior tibial shear) ทำให้ PCL graft หรือเอ็นที่บาดเจ็บเกิดการยืดคลายตัวหรือฉีกขาดได้ จึงเป็นข้อห้ามในระยะแรก"
  },
  {
    category: "Cardiopulmonary PT",
    question: "ผู้ป่วยได้รับการผ่าตัดฝังเครื่องกระตุ้นหัวใจถาวร (Permanent Pacemaker) บริเวณใต้กระดูกไหปลาร้าข้างซ้าย ในช่วง 4 ถึง 6 สัปดาห์แรกหลังผ่าตัด ข้อควรระวังในการเคลื่อนไหวแขนข้างซ้ายที่สำคัญที่สุดคือข้อใด?",
    options: [
      "A. ห้ามงอศอกเกิน 90 องศา",
      "B. จำกัดการกางแขนและยกแขนข้างซ้ายไม่ให้เกิน 90 องศา (Avoid Shoulder Abduction & Flexion > 90°) และหลีกเลี่ยงการยกของหนัก",
      "C. ห้ามขยับนิ้วมือและข้อมือข้างซ้ายเด็ดขาด",
      "D. สั่งให้นอนทับหัวไหล่ข้างซ้ายตลอดทั้งคืน"
    ],
    correct: 1,
    hint: "ป้องกันการเลื่อนหลุดของสายสื่อสัญญาณ (Lead dislodgement) ที่เชื่อมต่อไปยังห้องหัวใจ",
    explanation: "ในช่วง 4-6 สัปดาห์แรกหลังการฝัง Pacemaker สายนำสัญญาณ (Pacing leads) กำลังสร้างพังผืดเกาะยึดติดกับผนังกล้ามเนื้อหัวใจ การยกแขนหรือกางแขนเกิน 90 องศา รวมถึงการเอื้อมแขนไปด้านหลังสุดองศา จะสร้างแรงตึงดึงรั้งหลอดเลือดดำ Subclavian และอาจทำให้สายสื่อสัญญาณหลุดออกจากตำแหน่งเดิมได้"
  },
  {
    category: "Neurological PT",
    question: "ผู้ป่วยอุบัติเหตุไขสันหลังบาดเจ็บเฉียบพลันอยู่ในภาวะ Spinal Shock (ระยะช็อกของไขสันหลัง) ข้อใดเป็นตัวบ่งชี้ทางคลินิกที่ยืนยันว่าผู้ป่วยได้สิ้นสุดภาวะ Spinal Shock และเริ่มเข้าสู่ระยะ Spasticity?",
    options: [
      "A. การตรวจพบการกลับคืนมาของรีเฟล็กซ์บริเวณไขสันหลังส่วนกระเบนเหน็บ เช่น Bulbocavernosus Reflex",
      "B. การที่ผู้ป่วยสามารถลุกขึ้นเดินได้ทันที",
      "C. กล้ามเนื้อแขนขามีลักษณะปวกเปียก (Flaccidity) เพิ่มขึ้น",
      "D. ความดันโลหิตลดต่ำลงอย่างต่อเนื่อง"
    ],
    correct: 0,
    hint: "Sacral reflex ที่เกิดจากการบีบหัวกระเปาะอวัยวะเพศหรือกระตุกสายสวนแล้วหูรูดทวารหนักหดตัว",
    explanation: "ภาวะ Spinal Shock มีลักษณะคือการสูญเสียรีเฟล็กซ์และการตึงตัวของกล้ามเนื้อทั้งหมดใต้ระดับพยาธิสภาพ การกลับคืนมาของ Bulbocavernosus reflex (S2-S4) หรือ Anal wink reflex เป็นสัญญาณทางคลินิกแรกที่บ่งชี้ว่าไขสันหลังเริ่มฟื้นตัวจากภาวะช็อก และกำลังเปลี่ยนผ่านเข้าสู่ระยะ Upper Motor Neuron Hyperreflexia/Spasticity"
  },
  {
    category: "Musculoskeletal PT",
    question: "นักวิ่งอายุ 42 ปี มีอาการเจ็บแปล๊บบริเวณเอ็นร้อยหวายด้านหลังข้อเท้าเฉียบพลันขณะกระโดด ได้ยินเสียงลั่นคล้ายมีคนเอาหินมาปาใส่ส้นเท้า การตรวจร่างกายโดยให้นอนคว่ำงอเข่า 90° แล้วบีบกล้ามเนื้อน่อง พบว่าข้อเท้าไม่มีการกระดกฝ่าเท้าลง (Absence of Plantarflexion) การทดสอบนี้เรียกว่าอะไรและบ่งชี้ภาวะใด?",
    options: [
      "A. Anterior Drawer Test บ่งชี้ภาวะ ATFL tear",
      "B. Thompson's Test (Simmonds' test) บ่งชี้ภาวะ Complete Achilles Tendon Rupture",
      "C. Talar Tilt Test บ่งชี้ภาวะ CFL tear",
      "D. Homan's Sign บ่งชี้ภาวะ Deep Vein Thrombosis"
    ],
    correct: 1,
    hint: "การบีบกล้ามเนื้อน่อง (Calf squeeze) ปกติต้องส่งแรงดึงผ่านเอ็นร้อยหวายทำให้เกิด Plantarflexion",
    explanation: "Thompson's Test ทำโดยให้ผู้ป่วยนอนคว่ำแล้วผู้ตรวจบีบกล้ามเนื้อน่อง (Gastrocnemius-soleus complex) ในคนปกติ ข้อเท้าจะเกิดการกระดกลง (Plantarflexion) เล็กน้อย หากบีบแล้วข้อเท้านิ่งสนิทไม่มีการเคลื่อนไหว แสดงว่ามีการฉีกขาดสมบูรณ์ของเส้นเอ็นร้อยหวาย (Achilles tendon rupture)"
  },
  {
    category: "Cardiopulmonary PT",
    question: "ผู้ป่วยหญิงอายุ 24 ปี มีอาการเวียนศีรษะ ใจสั่น หน้ามืด และเหนื่อยล้าอย่างมากเวลาลุกขึ้นยืน ตรวจวัดสัญญาณชีพในท่านอนพบ HR 72 bpm, BP 115/75 mmHg แต่เมื่อให้ยืนนิ่งเป็นเวลา 8 นาที พบว่า HR พุ่งสูงขึ้นเป็น 118 bpm โดยที่ BP ยังคงอยู่ที่ 112/74 mmHg (ไม่มีภาวะ Orthostatic Hypotension) ลักษณะนี้ตรงกับเกณฑ์การวินิจฉัยของภาวะใด?",
    options: [
      "A. Postural Orthostatic Tachycardia Syndrome (POTS)",
      "B. Vasovagal Syncope",
      "C. Carotid Sinus Hypersensitivity",
      "D. Sinus Bradycardia"
    ],
    correct: 0,
    hint: "อัตราการเต้นของหัวใจเพิ่มขึ้นมากกว่า 30 ครั้งต่อนาทีภายใน 10 นาทีของการยืน โดยไม่มีความดันตก",
    explanation: "เกณฑ์การวินิจฉัย Postural Orthostatic Tachycardia Syndrome (POTS) ในผู้ใหญ่คือ อัตราการเต้นของหัวใจเพิ่มขึ้นอย่างต่อเนื่อง ≥ 30 ครั้งต่อนาที (หรือ HR > 120 bpm) ภายใน 10 นาทีหลังจากเปลี่ยนจากท่านอนเป็นท่ายืน โดยต้องไม่มีภาวะความดันโลหิตตกในท่ายืน (Orthostatic hypotension: SBP ตก > 20 หรือ DBP ตก > 10 mmHg)"
  },
  {
    category: "Musculoskeletal PT",
    question: "ก่อนทำเทคนิคการดัดดึงกระดูกสันหลังระดับคอ (Cervical Spine Manipulation) นักกายภาพบำบัดต้องซักประวัติและตรวจคัดกรองสัญญาณเตือนอันตรายของภาวะหลอดเลือดแดง Vertebrobasilar ขาดเลือด (VBI / Cervical Arterial Dysfunction) กลุ่มอาการ 5 D's and 3 N's ข้อใดกล่าวถึงอาการเตือนได้อย่างถูกต้องครบถ้วน?",
    options: [
      "A. Dizziness, Diplopia, Dysarthria, Dysphagia, Drop attacks และ Nausea, Numbness, Nystagmus",
      "B. Dyspnea, Diarrhea, Depression, Delirium, Dementia และ Necrosis, Nocturia, Neuritis",
      "C. Dislocation, Deformity, Distention, Dysphagia, Dyspnea และ Neuralgia, Nodule, Nausea",
      "D. Dyslexia, Dyskinesia, Dysmetria, Diplopia, Dizziness และ Narcolepsy, Nephritis, Numbness"
    ],
    correct: 0,
    hint: "อาการเวียนศีรษะ เห็นภาพซ้อน พูดไม่ชัด กลืนลำบาก วูบล้มหมดสติ ร่วมกับคลื่นไส้ ชาใบหน้า/ปาก และตากระตุก",
    explanation: "ตามกรอบประเมิน IFOMPT อาการแสดงคลาสสิกของ Vertebrobasilar Insufficiency (VBI) คือ 5 D's ได้แก่ Dizziness (เวียนศีรษะ), Diplopia (เห็นภาพซ้อน), Dysarthria (พูดไม่ชัด), Dysphagia (กลืนลำบาก), Drop attacks (วูบทรุดตัวเฉียบพลัน) ร่วมกับ 3 N's คือ Nausea (คลื่นไส้), Numbness (ชาครึ่งซีกหรือรอบปาก) และ Nystagmus (ตากระตุก) หากพบข้อใดข้อหนึ่งห้ามดัดดึงข้อต่อคอโดยเด็ดขาด"
  },
  {
    category: "Neurological PT",
    question: "ผู้ป่วยโรคพาร์กินสันที่รับประทานยา Levodopa มานานกว่า 6 ปี เริ่มมีอาการ Motor fluctuations ชนิด 'On-Off' phenomenon และมีอาการบิดเกร็งขยับแขนขาไม่หยุด (Peak-dose Dyskinesia) การจัดช่วงเวลาในการทำกายภาพบำบัดฝึกการเดินและการทรงตัวข้อใดมีประสิทธิภาพสูงสุด?",
    options: [
      "A. ฝึกในช่วงที่ยากำลังหมดฤทธิ์ (Off period) เพื่อกระตุ้นให้ร่างกายปรับตัว",
      "B. นัดฝึกในช่วง Peak 'On' period หลังรับประทานยาประมาณ 45-60 นาที ซึ่งเป็นช่วงที่กล้ามเนื้อคลายตัวและเคลื่อนไหวได้ดีที่สุด",
      "C. นัดฝึกตอนท้องว่างช่วงเช้ามืดก่อนรับประทานยาเม็ดแรกของวัน",
      "D. ฝึกเฉพาะขณะที่มีอาการ Dyskinesia รุนแรงเพื่อฝึกต้านแรงสะบัด"
    ],
    correct: 1,
    hint: "การฝึกทักษะการเคลื่อนไหวจำเป็นต้องอาศัยสภาวะที่สมองได้รับ Dopamine ในระดับที่เหมาะสมเพื่อสร้าง Motor learning",
    explanation: "การฝึกกายภาพบำบัดในผู้ป่วยพาร์กินสันควรจัดตารางให้ตรงกับช่วง 'On' period (มักเกิดหลังรับประทานยา 45-60 นาที) เพราะเป็นช่วงที่อาการเกร็ง (Rigidity) และการเคลื่อนไหวช้า (Bradykinesia) ลดลงมากที่สุด ทำให้ผู้ป่วยสามารถฝึกก้าวเดิน รักษาสมดุล และสร้างกระบวนการเรียนรู้ของการสั่งการเคลื่อนไหวได้อย่างปลอดภัยและมีประสิทธิภาพสูงสุด"
  },
  {
    category: "Cardiopulmonary PT",
    question: "ผู้ป่วยหลอดลมอักเสบเรื้อรัง ตรวจฟังปอดพบเสียงเสมหะคั่งค้างชัดเจนบริเวณปอดกลีบกลางข้างขวา (Right Middle Lobe) การจัดท่าเคาะปอดเพื่อระบายเสมหะ (Postural Drainage) ข้อใดถูกต้องตามหลักกายวิภาคศาสตร์?",
    options: [
      "A. นอนหงายราบ 180 องศาโดยไม่ต้องปรับระดับเตียง",
      "B. นอนตะแคงกึ่งคว่ำทับซีกขวา ปรับเตียงยกศีรษะสูง 45 องศา",
      "C. นอนตะแคงกึ่งหงายทางซ้าย (ลำตัวเอียงขึ้น 1/4 จากพื้น) ปรับเตียงเทลาดศีรษะต่ำลงประมาณ 15-30 องศา (Trendelenburg) แล้วเคาะบริเวณใต้ราวนมขวา",
      "D. นั่งโน้มตัวไปข้างหน้ากอดหมอน แล้วเคาะบริเวณสะบักหลังด้านขวา"
    ],
    correct: 2,
    hint: "Right Middle Lobe อยู่ทางด้านหน้าล่าง หลอดลมแขนงทอดชี้ขึ้นบนและไปทางด้านหลัง",
    explanation: "ท่อหลอดลมของ Right Middle Lobe ทอดตัวเฉียงขึ้นบนและไปทางด้านหลังเข้าสู่หลอดลมใหญ่ ดังนั้นการระบายตามแรงโน้มถ่วงต้องจัดให้ผู้ป่วยนอนตะแคงกึ่งหงายทางซ้าย (หงายลำตัวขึ้น 45° จากระนาบคว่ำ) และปรับเตียงศีรษะต่ำลง 15-30° (12-14 นิ้ว) เคาะบริเวณทรวงอกด้านหน้าขวาใต้ราวนม"
  },
  {
    category: "Pediatric PT",
    question: "ทารกอายุ 8 เดือน ตรวจพบว่าเมื่อหันศีรษะไปทางด้านขวา แขนและขาข้างขวาจะเหยียดออกทันที ขณะที่แขนและขาข้างซ้ายจะงอเข้าหาตัว (Fencer posture) และไม่สามารถขยับเปลี่ยนท่าได้เอง ภาวะ Primitive reflex ที่คงอยู่นานเกินวัย (Persistent reflex) นี้คือข้อใดและส่งผลขัดขวางพัฒนาการด้านใดมากที่สุด?",
    options: [
      "A. Persistent Moro reflex ขัดขวางการได้ยิน",
      "B. Persistent Asymmetrical Tonic Neck Reflex (ATNR) ขัดขวางการพลิกคว่ำพลิกหงาย การนำมือสองข้างมาประสานกันที่แนวกึ่งกลางลำตัว (Midline hand use) และการมองตามมือ",
      "C. Persistent Symmetrical Tonic Neck Reflex (STNR) ขัดขวางการชันคอ",
      "D. Persistent Rooting reflex ขัดขวางการกลืนอาหาร"
    ],
    correct: 1,
    hint: "ATNR ควรถูกกดระงับ (Integrated) ไปตามธรรมชาติในช่วงอายุ 4-6 เดือน",
    explanation: "ATNR (Asymmetrical Tonic Neck Reflex) หรือท่าฟันดาบ จะถูกบูรณาการและหายไปเมื่ออายุ 4-6 เดือน หากยังคงอยู่หลังอายุ 6 เดือนถือว่าผิดปกติ (มักพบในเด็ก Cerebral Palsy) ขัดขวางพัฒนาการสำคัญ เช่น การพลิกคว่ำพลิกหงาย (Rolling), การเอามือสองข้างมาเล่นกันตรงกลางลำตัว (Hand-to-mouth/Midline skill) และทำให้เสี่ยงต่อข้อสะโพกหลุดข้างที่งอ"
  },
  {
    category: "Musculoskeletal PT",
    question: "นักกีฬาฟุตบอลได้รับบาดเจ็บข้อไหล่หลุดไปทางด้านหน้า (Anterior Shoulder Dislocation) ได้รับการจัดข้อไหล่เข้าที่แล้ว ในช่วง 4 สัปดาห์แรกของการฟื้นฟูทางกายภาพบำบัด ท่าทางการเคลื่อนไหวข้อใดเป็นข้อห้ามอย่างเด็ดขาด (Apprehension position) เพื่อป้องกันข้อไหล่หลุดซ้ำ?",
    options: [
      "A. การเคลื่อนไหวในท่ากางแขน 90 องศา ร่วมกับหมุนข้อไหล่ออกด้านนอกสุดองศา (Shoulder 90° Abduction with External Rotation)",
      "B. การหุบแขนแนบลำตัวร่วมกับงอข้อศอก 90 องศา",
      "C. การเคลื่อนไหวในท่าหมุนข้อไหล่เข้าด้านใน (Internal rotation) ที่ระนาบลำตัว",
      "D. การเคลื่อนไหวกระดกข้อมือและกำมือเหยียดนิ้ว"
    ],
    correct: 0,
    hint: "ท่าเดียวกับจังหวะ Cocking phase ในการขว้างบอล ซึ่งจะดันหัวกระดูกต้นแขนทะลักไปทางด้านหน้าของเบ้า",
    explanation: "ท่า 90° Abduction ร่วมกับ External Rotation เป็นตำแหน่งที่สร้างความตึงเค้นต่อ Anterior-inferior glenohumeral ligament (AIGHL) และเยื่อหุ้มข้อด้านหน้าสูงสุด ซึ่งเป็นตำแหน่งที่ทำให้เกิดข้อไหล่หลุดซ้ำ (Apprehension position) จึงเป็นข้อห้ามเด็ดขาดในช่วงแรกของการฟื้นฟูหลัง Anterior dislocation"
  },
  {
    category: "Neurological PT",
    question: "ผู้ป่วยหญิงมีอาการขาข้างขวาอ่อนแรงเฉียบพลัน ขยับยกขาไม่ขึ้นขณะนอนหงาย นักกายภาพบำบัดตรวจ Hoover's sign โดยสอดมือไว้ใต้ส้นเท้าข้างขวา (ข้างที่อ่อนแรง) แล้วสั่งให้ผู้ป่วยยกขาข้างซ้ายขึ้น พบว่าส้นเท้าขวากดลงบนมือของผู้ตรวจอย่างหนักแน่น ผลตรวจนี้บ่งชี้ถึงภาวะใด?",
    options: [
      "A. รอยโรคของเส้นประสาท Sciatic ขาดอย่างสมบูรณ์",
      "B. รอยโรคทางระบบประสาทที่เกิดจากการทำงานผิดปกติโดยไม่มีพยาธิสภาพทางกายวิภาค (Functional Neurological Disorder / Non-organic weakness)",
      "C. รอยโรคหลอดเลือดสมองแตกในก้านสมองส่วนพอนส์",
      "D. ภาวะเส้นประสาทไขสันหลังอักเสบเฉียบพลัน (Transverse myelitis)"
    ],
    correct: 1,
    hint: "การทำงานแบบอัตโนมัติของการเหยียดสะโพกข้ามข้าง (Involuntary contralateral hip extension) ทำงานได้ปกติเมื่อไม่ได้ตั้งใจออกแรง",
    explanation: "Hoover's test ใช้ตรวจแยก Organic paresis กับ Functional weakness: เมื่อสั่งให้ผู้ป่วยงอสะโพกยกขาข้างปกติ ขาข้างตรงข้ามที่อ่อนแรงจะเกิดแรงกดลงบนพื้นเตียงโดยอัตโนมัติ (Involuntary hip extension) หากพบว่ามีแรงกดลงเต็มที่อย่างชัดเจน แสดงว่าทางเดินประสาทสั่งการและการทำงานของกล้ามเนื้อยังสมบูรณ์ (Positive Hoover's sign for Functional Neurological Disorder)"
  },
  {
    category: "Geriatric PT",
    question: "ผู้ป่วยสูงอายุ 78 ปี ประสบอุบัติเหตุล้มก้นกระแทก ได้รับการผ่าตัดเปลี่ยนหัวกระดูกต้นขาเทียมชนิดกึ่งหนึ่ง (Bipolar Hemiarthroplasty) แบบไม่ใช้ซีเมนต์ยึดกระดูก (Uncemented / Press-fit fixation) การจำกัดการลงน้ำหนักที่ขาข้างผ่าตัด (Weight-bearing status) ในสัปดาห์แรกมักถูกกำหนดอย่างไรเพื่อความปลอดภัยของกระดูก?",
    options: [
      "A. Full Weight Bearing (ลงน้ำหนักเต็มที่ 100%) ทันทีตั้งแต่วันแรกโดยไม่ต้องใช้อุปกรณ์ช่วยเดิน",
      "B. Partial Weight Bearing (PWB) หรือ Toe-touch Weight Bearing (TTWB) ด้วย Walker เพื่อรอให้เซลล์กระดูกเจริญเข้าไปยึดเกาะผิวข้อเทียม (Bone ingrowth)",
      "C. นอนพักนิ่งบนเตียงราบ 4 สัปดาห์ ห้ามขยับข้อเท้า",
      "D. สั่งให้ฝึกกระโดดขาเดียวข้างที่ผ่าตัดเพื่อเร่งสร้างแคลเซียม"
    ],
    correct: 1,
    hint: "ข้อต่อเทียมแบบ Press-fit ไม่ได้ใช้ซีเมนต์ยึดล็อกทันที ต้องอาศัยเวลาให้กระดูกธรรมชาติเติบโตเข้าสู่รูพรุนของโลหะ",
    explanation: "การผ่าตัดข้อเทียมแบบ Uncemented (Press-fit) อาศัยกระบวนการ Biological fixation โดยให้เนื้อกระดูกงอกเข้าไปยึดผิวขรุขระของก้านข้อเทียม ซึ่งต้องใช้เวลา 6-8 สัปดาห์ ในระยะแรกจึงมักจำกัดการลงน้ำหนักไว้ที่ Touch-down หรือ Partial weight bearing เพื่อป้องกันข้อเทียมทรุดหรือเลื่อนหลุด แตกต่างจากแบบ Cemented ที่รับน้ำหนักได้เร็วกว่า"
  },
  {
    category: "Cardiopulmonary PT",
    question: "ผู้ป่วยได้รับการผ่าตัดปลูกถ่ายหัวใจ (Heart Transplantation) มารับการฝึกฟื้นฟูสมรรถภาพหัวใจระยะที่ 2 การตอบสนองทางสรีรวิทยาของ 'Denervated Heart' (หัวใจที่ถูกตัดขาดจากระบบประสาทอัตโนมัติ) ต่อการออกกำลังกายมีลักษณะเฉพาะอย่างไร?",
    options: [
      "A. ชีพจรเต้นช้ามากขณะพัก (Resting HR < 50 bpm) และหัวใจตอบสนองเร็วผิดปกติ",
      "B. อัตราการเต้นของหัวใจขณะพักสูงขึ้น (Resting HR 90-110 bpm) จากการสูญเสีย Vagal tone และการปรับเพิ่ม/ลดของอัตราเต้นของหัวใจขณะออกกำลังกายจะตอบสนองช้า (Delayed HR response) ต้องอาศัยฮอร์โมน Catecholamine ในกระแสเลือด",
      "C. ระบบประสาท Sympathetic สั่งการหัวใจได้เร็วกว่าคนปกติ 2 เท่า",
      "D. ค่าความดันโลหิตจะคงที่ตลอดเวลาไม่ว่าจะออกกำลังกายหนักเพียงใด"
    ],
    correct: 1,
    hint: "เส้นประสาท Vagus ถูกตัดขาด ทำให้หัวใจไม่มีตัวเบรก และการเร่งอัตราเต้นต้องรอฮอร์โมน Epinephrine จากต่อมหมวกไต",
    explanation: "หัวใจที่ได้รับการปลูกถ่ายจะสูญเสียการควบคุมจากระบบประสาทอัตโนมัติ (Denervated): 1) ขาด Parasympathetic tone ทำให้ Resting HR สูง (ประมาณ 90-100 bpm), 2) ในช่วงเริ่มออกกำลังกาย HR จะไม่ขึ้นทันที แต่จะค่อยๆ สูงขึ้นช้าๆ ตามระดับ Catecholamine ในเลือด และ 3) เมื่อหยุดออกกำลังกาย HR จะลงช้ามาก ดังนั้นการทำ Extended Warm-up และ Cool-down จึงสำคัญอย่างยิ่ง"
  },
  {
    category: "Neurological PT",
    question: "ผู้ป่วยตื่นเช้ามาพบว่ามุมปากข้างขวาตก ดื่มน้ำไหลออกจากมุมปาก และ 'หลับตาข้างขวาไม่สนิท หน้าผากข้างขวาไม่มีรอยย่น' ตรวจการได้ยินปกติและแขนขามีกำลังปกติทุกส่วน พยาธิสภาพนี้คือโรคใดและเป็นรอยโรคระดับใด?",
    options: [
      "A. โรคหลอดเลือดสมองแตก (Stroke) เป็นรอยโรคชนิด Upper Motor Neuron (UMN) ของเส้นประสาทสมองคู่ที่ 7",
      "B. Bell's Palsy เป็นรอยโรคชนิด Lower Motor Neuron (LMN) ของเส้นประสาทสมองคู่ที่ 7 (Facial Nerve)",
      "C. Trigeminal Neuralgia เป็นรอยโรคของเส้นประสาทสมองคู่ที่ 5",
      "D. Horner's Syndrome จากรอยโรคของไขสันหลังส่วนคอ"
    ],
    correct: 1,
    hint: "รอยโรค LMN จะส่งผลต่อกล้ามเนื้อใบหน้าทั้งซีกบนและซีกล่าง (รวมหน้าผาก) เนื่องจากขาดการควบคุมทั้งหมด",
    explanation: "กล้ามเนื้อหน้าผากได้รับสัญญาณประสาทสั่งการแบบ Bilateral UMN innervation ดังนั้นในรอยโรค UMN (เช่น Stroke) ผู้ป่วยจะยังย่นหน้าผากและปิดตาได้ แต่ในรอยโรคระดับ Lower Motor Neuron (เช่น Bell's palsy) เส้นประสาทสมองคู่ที่ 7 ถูกทำลายโดยตรง ทำให้เป็นอัมพาตครึ่งซีกทั้งใบหน้า รวมถึงหน้าผากย่นไม่ได้และปิดตาไม่สนิท (Bell's phenomenon)"
  },
  {
    category: "Musculoskeletal PT",
    question: "ผู้ป่วยได้รับการวินิจฉัยว่าเป็น Adhesive Capsulitis (Frozen Shoulder) มีข้อจำกัดของการเคลื่อนไหวในทิศทางกางแขนออก (Shoulder Abduction) อย่างมาก ตามกฎ Convex-Concave Rule ของ Maitland การทำ Joint Mobilization เพื่อเพิ่มองศาการกางแขนควรดัดดึงหัวกระดูก Humerus ไปในทิศทางใด?",
    options: [
      "A. Anterior glide",
      "B. Inferior (Caudal) glide",
      "C. Posterior glide",
      "D. Superior glide"
    ],
    correct: 1,
    hint: "หัวกระดูก Humerus ผิวนูน (Convex) เคลื่อนที่บนเบ้า Glenoid ผิวเว้า (Concave) ทิศทางการกลิ้ง (Roll) และเลื่อนตัว (Slide/Glide) จะสวนทางกัน",
    explanation: "ตามกฎ Convex-Concave rule: ขณะทำ Shoulder Abduction หัวกระดูก Humerus (Convex) จะกลิ้งขึ้นบน (Rolls superiorly) และเลื่อนตัวลงด้านล่าง (Slides inferiorly) ดังนั้นการฟื้นฟูเพื่อเพิ่มองศา Abduction จึงต้องทำข้อต่อเลื่อนไถลไปในทิศทางด้านล่าง คือ Inferior (Caudal) glide"
  },
  {
    category: "Pediatric PT",
    question: "เด็กชายวัยรุ่นอายุ 13 ปี รูปร่างอ้วนท้วม มาพบนักกายภาพบำบัดด้วยอาการเดินกะเผลก ปวดสะโพกด้านหน้าและปวดร้าวลงมาที่ข้อเข่าข้างขวา โดยไม่มีประวัติอุบัติเหตุ ตรวจพบว่าเมื่องอข้อสะโพกขึ้น ข้อสะโพกจะบิดหมุนออกด้านนอกโดยอัตโนมัติ (Obligate External Rotation / Positive Drehmann sign) ภาวะนี้คืออะไรและข้อควรระวังเร่งด่วนคือข้อใด?",
    options: [
      "A. Osgood-Schlatter disease ให้ฝึกเหยียดเข่าต้านแรง",
      "B. Slipped Capital Femoral Epiphysis (SCFE) ต้องให้ผู้ป่วยหยุดลงน้ำหนักทันที (Non-weight bearing) และส่งพบศัลยแพทย์กระดูกเพื่อผ่าตัดยึดตรึง",
      "C. Legg-Calvé-Perthes Disease ให้ฝึกวิ่งกระโดด",
      "D. Transient Synovitis ให้ออกกำลังกายหนักได้ตามปกติ"
    ],
    correct: 1,
    hint: "การเลื่อนหลุดของแผ่นเจริญกระดูกหัวสะโพกในเด็กวัยรุ่นอ้วน หากฝืนลงน้ำหนักจะเกิด Avascular necrosis",
    explanation: "SCFE พบบ่อยในเด็กชายวัยรุ่นที่มีน้ำหนักเกิน มีอาการปวดสะโพกร้าวไปเข่า และตรวจพบ Drehmann sign (ขางอสะโพกจะบิดออกนอกเอง) เป็นภาวะฉุกเฉินทางออร์โธปิดิกส์ หากปล่อยให้ลงน้ำหนักอาจทำให้หัวกระดูก Femur เลื่อนหลุดมากขึ้นจนขาดเลือดไปเลี้ยง (AVN) ต้องให้งดลงน้ำหนักทันทีและส่งผ่าตัดใส่ Screw ยึดตรึง"
  },
  {
    category: "Neurological PT",
    question: "ผู้ป่วยเคยป่วยเป็นโรคโปลิโอเมื่ออายุ 8 ขวบ ปัจจุบันอายุ 55 ปี เริ่มมีอาการกล้ามเนื้อขาล้าอย่างหนัก มีอาการอ่อนแรงลามไปยังกล้ามเนื้อส่วนที่ไม่เคยมีอาการมาก่อน ร่วมกับมีอาการปวดข้อและกล้ามเนื้อสั่นกระตุก (Fasciculation) ได้รับการวินิจฉัยเป็น Post-Polio Syndrome (PPS) หลักการออกกำลังกายที่เหมาะสมที่สุดคือข้อใด?",
    options: [
      "A. ออกกำลังกายแบบ High-intensity resistance training เพื่อเร่งสร้างเซลล์ประสาทใหม่",
      "B. ออกกำลังกายแบบ Non-fatiguing exercise ความหนักระดับเบาถึงปานกลาง แบ่งรอบสั้นๆ พักบ่อยๆ (Pacing) และเน้นการอนุรักษ์พลังงาน (Energy conservation)",
      "C. ฝึกกล้ามเนื้อจนเกิดความล้าอย่างที่สุดในทุกเซต",
      "D. ห้ามเคลื่อนไหวขาทุกกรณีเพื่อหยุดการทำลายของเส้นประสาท"
    ],
    correct: 1,
    hint: "เซลล์ประสาท Motor unit ที่เหลือรอดทำงานหนักเกินกำลังมานานหลายสิบปีจนเกิดภาวะเสื่อมสลายจากการใช้งานเกิน",
    explanation: "Post-Polio Syndrome เกิดจากการเสื่อมสภาพของ Giant motor units ที่แตกกิ่งก้านมาชดเชยเซลล์ที่ตายไป การออกกำลังกายหนักจนล้าจะเร่งให้เซลล์ประสาทตายเร็วขึ้น หลักการสำคัญคือ 'Non-fatiguing exercise' ใช้แรงต้านต่ำถึงปานกลาง ไม่ทำซ้ำจนหมดแรง มีช่วงพักสลับสม่ำเสมอ ร่วมกับการประเมินใช้อุปกรณ์ช่วยเดินเพื่อผ่อนแรง"
  },
  {
    category: "Cardiopulmonary PT",
    question: "ผลตรวจก๊าซในเลือดแดง (Arterial Blood Gas: ABG) ของผู้ป่วยโรคปอดอุดกั้นเรื้อรัง (COPD) ที่มีอาการกำเริบเฉียบพลัน พบค่า: pH = 7.28, PaCO2 = 62 mmHg, HCO3- = 29 mEq/L, PaO2 = 58 mmHg การแปลผลภาวะกรด-ด่างในเลือดข้อใดถูกต้องที่สุด?",
    options: [
      "A. Fully compensated Metabolic Acidosis with severe hypoxemia",
      "B. Partially compensated Respiratory Acidosis with hypoxemia",
      "C. Uncompensated Respiratory Alkalosis",
      "D. Normal acid-base balance"
    ],
    correct: 1,
    hint: "pH < 7.35 เป็นกรด (Acidosis), PaCO2 > 45 สะท้อนปัญหาการระบายลมหายใจคั่ง (Respiratory) และไตเริ่มเก็บกักไบคาร์บอเนต (HCO3- > 26) เพื่อชดเชย",
    explanation: "pH 7.28 (< 7.35) = Acidemia; PaCO2 62 mmHg (> 45) ชี้ต้นตอมาจากระบบหายใจ = Respiratory Acidosis; ค่า HCO3- 29 mEq/L (> 26) สูงขึ้นสะท้อนว่าไตเริ่มทำงานชดเชยแต่ยังไม่สมบูรณ์ (เพราะ pH ยังไม่กลับสู่เกณฑ์ปกติ 7.35-7.45) จึงแปลผลเป็น 'Partially compensated Respiratory Acidosis' ร่วมกับมีภาวะ Hypoxemia (PaO2 < 60)"
  },
  {
    category: "Musculoskeletal PT",
    question: "ผู้ป่วยข้อเข่าเสื่อม (Knee Osteoarthritis) ช่องข้อต่อด้านในแคบลง (Medial Compartment OA) มีแนวกระดูกโก่งแบบ Genu Varum การใช้อุปกรณ์เสริมแผ่นรองในรองเท้า (Orthotic insole) ชนิดใดช่วยลดแรงบีบอัดในช่องข้อต่อเข่าด้านใน (Knee Adduction Moment: KAM) ขณะเดินลงน้ำหนักได้ดีที่สุด?",
    options: [
      "A. แผ่นหนุนใต้ส้นเท้าด้านใน (Medial Heel Wedge)",
      "B. แผ่นหนุนเสริมใต้ขอบส้นเท้าด้านนอก (Lateral Heel Wedge insole)",
      "C. แผ่นรองนูนหนุนอุ้งเท้าด้านในสูงพิเศษ",
      "D. การใส่รองเท้าพื้นนิ่มทรงโค้งกลม"
    ],
    correct: 1,
    hint: "การยกขอบส้นเท้าด้านนอกขึ้นจะช่วยดึงแนวกระดูกขาเข้าสู่ Valgus เล็กน้อยและเลื่อนแนวแรง Ground Reaction Force ให้เข้าใกล้จุดหมุนข้อเข่า",
    explanation: "ใน Medial knee OA แรงกระทบพื้น (GRF) จะผ่านทางด้านในของเข่า ก่อให้เกิด External Knee Adduction Moment (KAM) ที่บีบอัดข้อเข่าด้านใน การใช้ Lateral wedge insole (หนุนส้นเท้าด้านนอกสูงขึ้น 5-10 องศา) จะช่วยลดแขนของแรง (Moment arm) ของ GRF ส่งผลให้แรงกดอัดที่กระทำต่อ Medial compartment ลดลงอย่างมีนัยสำคัญ"
  },
  {
    category: "Geriatric PT",
    question: "แบบประเมินความสามารถในการทรงตัว Berg Balance Scale (BBS) มีคะแนนเต็ม 56 คะแนน หากผู้สูงอายุทำแบบทดสอบได้คะแนนเท่ากับ 38 คะแนน ข้อใดคือการแปลความหมายทางคลินิกที่ถูกต้องที่สุด?",
    options: [
      "A. การทรงตัวอยู่ในเกณฑ์ดีเยี่ยม ไม่มีความเสี่ยงต่อการหกล้ม",
      "B. มีความเสี่ยงต่อการหกล้มระดับปานกลางถึงสูง (Medium to High Fall Risk) และจำเป็นต้องใช้อุปกรณ์ช่วยเดินเพื่อความปลอดภัย",
      "C. บ่งชี้ว่าผู้ป่วยเป็นอัมพาตครึ่งท่อนล่าง ไม่สามารถยืนได้",
      "D. เป็นเกณฑ์ปกติสำหรับผู้สูงอายุทุกคนที่มีอายุเกิน 75 ปี"
    ],
    correct: 1,
    hint: "จุดตัด (Cut-off score) ของ BBS ที่ระบุว่ามีความเสี่ยงต่อการหกล้มเพิ่มขึ้นอย่างชัดเจนคือคะแนน < 45",
    explanation: "Berg Balance Scale มีคะแนนเต็ม 56: คะแนน 41-56 จัดว่ามีความเสี่ยงหกล้มต่ำ, 21-40 มีความเสี่ยงหกล้มระดับปานกลาง (Medium fall risk) และมักต้องใช้อุปกรณ์ช่วยเดิน, และ 0-20 บ่งชี้ถึงความเสี่ยงหกล้มสูงมาก โดยจุดตัดที่ยอมรับกันทั่วไปคือ < 45 คะแนน บ่งชี้ถึงความเสี่ยงต่อการหกล้มที่เพิ่มขึ้นชัดเจน"
  },
  {
    category: "Neurological PT",
    question: "ผู้ป่วยบาดเจ็บที่สมอง (Traumatic Brain Injury: TBI) ได้รับการประเมินระดับการรับรู้ตามเกณฑ์ Rancho Los Amigos Levels of Cognitive Functioning (RLAS) อยู่ที่ Level IV: Confused-Agitated (มีความสับสน กระสับกระส่าย ก้าวร้าว และมีช่วงความสนใจสั้นมาก) กลยุทธ์การจัดสภาพแวดล้อมและการรักษาทางกายภาพบำบัดข้อใดเหมาะสมที่สุด?",
    options: [
      "A. พาผู้ป่วยไปฝึกในยิมใหญ่ที่มีเสียงดังและผู้คนพลุกพล่านเพื่อกระตุ้นสมอง",
      "B. สอนทักษะใหม่ๆ ที่ซับซ้อนและบังคับให้ผู้ป่วยจำชื่อผู้ตรวจให้ได้",
      "C. จัดสภาพแวดล้อมที่เงียบสงบ ลดสิ่งเร้า (Quiet environment), ใช้กิจกรรมที่คุ้นเคยง่ายๆ, ให้ผู้ป่วยมีช่วงพักบ่อยครั้ง และเน้นความปลอดภัยเป็นอันดับแรก",
      "D. โต้เถียงและลงโทษเมื่อผู้ป่วยแสดงพฤติกรรมก้าวร้าวเพื่อปรับเปลี่ยนพฤติกรรม"
    ],
    correct: 2,
    hint: "สมองยังไม่สามารถกรองสิ่งเร้าได้ สภาพแวดล้อมที่วุ่นวายจะยิ่งกระตุ้นความก้าวร้าวและพฤติกรรมต่อต้าน",
    explanation: "ผู้ป่วย TBI Rancho Level IV อยู่ในภาวะสับสนและกระสับกระส่ายสูง ขาดความยับยั้งชั่งใจ แนวทางปฏิบัติคือ: จัดห้องฝึกที่ลดสิ่งเร้าทางแสงและเสียง (Low stimulation), กำหนดกิจวัตรที่สม่ำเสมอเรียบง่าย, หลีกเลี่ยงการเผชิญหน้าหรือโต้เถียง, มีคนคอยดูแลความปลอดภัยจากการดึงสายน้ำเกลือหรือปีนเตียง และมีความยืดหยุ่นปรับเปลี่ยนกิจกรรมตามอารมณ์ผู้ป่วย"
  },
  {
    category: "Musculoskeletal PT",
    question: "การตรวจคัดกรองภาวะรากประสาทคอถูกกดทับ (Cervical Radiculopathy) ตามกลุ่มแบบทดสอบทางคลินิกที่มีความจำเพาะสูงของ Wainner's Clinical Prediction Rule ข้อใดระบุการทดสอบครบทั้ง 4 รายการได้อย่างถูกต้อง?",
    options: [
      "A. Spurling's test, Cervical Distraction test, Upper Limb Tension Test A (ULTT A - Median), และ Cervical rotation น้อยกว่า 60 องศาไปข้างที่มีอาการ",
      "B. Hoffmann's sign, Babinski test, Clonus, และ Romberg test",
      "C. Neer test, Hawkins test, Drop arm test, และ Yergason test",
      "D. Slump test, SLR test, Thomas test, และ Faber test"
    ],
    correct: 0,
    hint: "หากผลการตรวจในกลุ่มนี้ให้ผลบวก 3 ใน 4 ข้อ ความน่าจะเป็นของการเป็น Cervical Radiculopathy จะสูงถึง 65% และหากบวกครบ 4 ข้อจะสูงถึง 90%",
    explanation: "Wainner et al. กำหนดชุดตรวจ Clinical Prediction Rule สำหรับ Cervical Radiculopathy ไว้ 4 ข้อ: 1) Positive ULTT A (Median nerve bias), 2) Positive Spurling's test (บีบอัดช่องรากประสาท), 3) Positive Distraction test (ดึงยกศีรษะแล้วอาการปวดร้าวทุเลา), และ 4) Cervical rotation ไปข้างที่มีอาการ < 60°"
  },
  {
    category: "Cardiopulmonary PT",
    question: "การใช้อุปกรณ์สร้างแรงดันบวกขณะหายใจออกชนิดสั่นสะเทือน (Oscillating Positive Expiratory Pressure: OPEP เช่น เครื่อง Flutter หรือ Acapella) ช่วยขับเสมหะออกจากทางเดินหายใจด้วยกลไกชีวฟิสิกส์ข้อใด?",
    options: [
      "A. สร้างแรงดันลบในปอดเพื่อดูดเสมหะออกจากผนังหลอดลม",
      "B. สร้างแรงดันบวกต้านการหายใจออกช่วยเปิดขยายหลอดลมส่วนปลาย ร่วมกับการสั่นสะเทือนของลำลมที่ช่วยลดความหนืดของเสมหะและร่อนเสมหะออกจากผนังหลอดลม",
      "C. สั่นสะเทือนกล้ามเนื้อกระบังลมโดยตรงเพื่อให้หดตัวเร็วขึ้น",
      "D. เพิ่มอุณหภูมิของอากาศที่หายใจเข้าไปถึง 42 องศาเซลเซียสเพื่อละลายเสมหะ"
    ],
    correct: 1,
    hint: "แรงต้านช่วยพยุงหลอดลมไม่ให้ตีบแคบ (Collateral ventilation) ผสมกับแรงสั่นสะเทือนทำให้เสมหะหลุดร่อน",
    explanation: "Oscillating PEP รวมสองกลไกไว้ด้วยกัน: 1) Positive Expiratory Pressure (PEP) ช่วยพยุงทางเดินหายใจไม่ให้ยุบตัวขณะหายใจออก และเปิดรูเชื่อมระหว่างถุงลม (Collateral channels) ดันอากาศไปอยู่หลังก้อนเสมหะ, 2) Airway oscillation (แรงสั่นสะเทือน 10-25 Hz) ช่วยสะบัดให้เมือกเสมหะลดความเหนียวข้น (Thixotropic effect) ร่อนหลุดและถูกพัดพาขึ้นมาสู่หลอดลมใหญ่ได้ง่าย"
  },
  {
    category: "Pediatric PT",
    question: "เด็กกลุ่มอาการดาวน์ (Down Syndrome / Trisomy 21) มีความหลวมของเนื้อเยื่อเกี่ยวพันทั่วร่างกาย (Ligamentous Laxity) ข้อควรระวังและกิจกรรมที่ต้องหลีกเลี่ยงเป็นพิเศษเนื่องจากความเสี่ยงต่อภาวะ Atlantoaxial Instability (AAI) คือข้อใด?",
    options: [
      "A. การฝึกนั่งทรงตัวบนพื้นราบ",
      "B. การเล่นท่าม้วนหน้า ม้วนหลัง (Somersaults), การกระโดดแทรมโพลีน และกีฬาที่มีการกระแทกหรือก้ม-เงยคอสุดองศา",
      "C. การบริหารการหายใจแบบกระบังลม",
      "D. การฝึกควบคุมการเอื้อมมือหยิบจับของเล่น"
    ],
    correct: 1,
    hint: "ความหลวมของ Transverse ligament บริเวณข้อต่อระหว่างกระดูกคอ C1 และ C2 เสี่ยงต่อการกดทับก้านสมองและไขสันหลัง",
    explanation: "เด็กกลุ่มอาการดาวน์ราว 10-20% มีภาวะข้อต่อ C1-C2 หลวมตัว (Atlantoaxial Instability) จากความอ่อนแอของเอ็นขึงกระดูก กิจกรรมที่สร้างแรงกระแทกหรือมีการก้มเงยคออย่างรุนแรง เช่น การม้วนตัว (Somersaults/Gymnastics), การโหม่งบอล, หรือแทรมโพลีน เป็นข้อห้ามเนื่องจากอาจทำให้กระดูก C1 เลื่อนไปกดทับไขสันหลังส่วนคอ ก่อให้เกิดอัมพาตหรือเสียชีวิตเฉียบพลัน"
  },
  {
    category: "Musculoskeletal PT",
    question: "ผู้ป่วยหญิงอายุ 48 ปี มีอาการปวดบริเวณด้านนอกของข้อสะโพก (Greater Trochanteric Pain Syndrome / Gluteal Tendinopathy) ปวดมากเวลานอนตะแคงทับข้างที่เป็น หรือยืนทิ้งน้ำหนักลงขาข้างเดียว การจัดท่าทางและการออกกำลังกายข้อใดที่ 'ควรหลีกเลี่ยง' ในระยะแรกเพื่อลดแรงกดอัด (Compressive load) ต่อเส้นเอ็น?",
    options: [
      "A. ท่ายืนตรงลงน้ำหนักสองขาสม่ำเสมอ",
      "B. ท่านั่งไขว่ห้าง (Crossed-leg sitting), การยืนพักขาทิ้งสะโพกไปด้านข้าง (Hanging on the hip), และการยืดเหยียด ITB ในท่า Adduction สุดองศา",
      "C. การออกกำลังกายเกร็งกล้ามเนื้อสะโพกแบบ Isometric ในมุม Neutral abduction",
      "D. การนอนหงายโดยมีหมอนรองใต้ข้อพับเข่า"
    ],
    correct: 1,
    hint: "แรงกดเบียดของ ITB แบนทับลงบนเส้นเอ็น Gluteus medius/minimus จะเกิดขึ้นสูงสุดเมื่อข้อสะโพกอยู่ในท่าหุบ (Adduction)",
    explanation: "พยาธิสภาพของ Gluteal tendinopathy ไวต่อแรงกดทับเชิงกล (Tensile + Compressive load) การทำท่า Hip Adduction เช่น การยืนพักขาทิ้งสะโพกไปข้างเดียว, นั่งไขว่ห้าง หรือการยืดกล้ามเนื้อสะโพกโดยดึงขาข้ามกึ่งกลางตัว จะทำให้ ITB บดทับเส้นเอ็นเข้ากับปุ่มกระดูก Greater trochanter ยิ่งกระตุ้นการอักเสบ จึงต้องหลีกเลี่ยงท่า Adduction เหล่านี้"
  },
  {
    category: "Neurological PT",
    question: "ผู้ป่วยบาดเจ็บไขสันหลังระดับใด เป็นระดับประสาทสูงสุดที่สามารถฟื้นฟูจนสามารถทำกิจกรรมเคลื่อนย้ายตัว (Independent Transfers) ลุกขึ้นนั่ง และเข็นรถเข็นธรรมดา (Manual Wheelchair) บนพื้นราบได้ด้วยตนเองโดยไม่ต้องพึ่งพาผู้อื่น?",
    options: [
      "A. ระดับ C4",
      "B. ระดับ C5",
      "C. ระดับ C7",
      "D. ระดับ T10"
    ],
    correct: 2,
    hint: "การมีกล้ามเนื้อ Triceps brachii (C7) ทำงานได้ เป็นปัจจัยชี้ขาดในการยันดันตัวขึ้นจากพื้นหรือเบาะ",
    explanation: "ระดับไขสันหลัง C7 มีกล้ามเนื้อสำคัญคือ Triceps Brachii, Latissimus dorsi และ Wrist flexors ซึ่งการมีแรงเหยียดข้อศอก (Triceps) ร่วมกับกดสะบักลง ทำให้ผู้ป่วยสามารถล็อกข้อศอกเพื่อยกก้นลอยพ้นพื้น (Depression transfer) ย้ายตัวเข้าออกจากรถเข็นไปเตียง และเข็น Manual wheelchair ได้อย่างอิสระ ซึ่งผู้ป่วยระดับ C6 ลงไปทำไม่ได้โดยปราศจากอุปกรณ์ช่วยพิเศษ"
  },
  {
    category: "Cardiopulmonary PT",
    question: "ผู้ป่วยเบาหวานชนิดที่ 2 กำลังเข้ารับการฝึกออกกำลังกายแบบแอโรบิกในโปรแกรมกายภาพบำบัด การตรวจระดับน้ำตาลในเลือดจากปลายนิ้วก่อนเริ่มออกกำลังกาย พบค่ากลูโคสเท่ากับ 85 mg/dL (ต่ำกว่า 100 mg/dL) นักกายภาพบำบัดควรปฏิบัติอย่างไร?",
    options: [
      "A. ให้เริ่มออกกำลังกายแบบวิ่งหนักทันทีเพื่อกระตุ้นตับให้หลั่งกลูโคส",
      "B. ให้ผู้ป่วยรับประทานอาหารว่างที่มีคาร์โบไฮเดรตเชิงเดี่ยว 15-20 กรัม (เช่น น้ำผลไม้ 1 กล่อง) รอ 15 นาที ตรวจระดับน้ำตาลซ้ำ เมื่อระดับ ≥ 100 mg/dL จึงเริ่มออกกำลังกายได้",
      "C. ฉีดอินซูลินเพิ่ม 5 ยูนิตเข้าที่กล้ามเนื้อต้นขาทันที",
      "D. ส่งตัวผู้ป่วยกลับบ้านทันทีและยกเลิกโปรแกรมออกกำลังกายถาวร"
    ],
    correct: 1,
    hint: "ปฏิบัติตามกฎ 'Rule of 15' สำหรับป้องกันภาวะน้ำตาลในเลือดต่ำเฉียบพลัน (Exercise-induced Hypoglycemia)",
    explanation: "ตามแนวทางเวชปฏิบัติของ ADA/ACSM: หากระดับน้ำตาลในเลือดก่อนออกกำลังกาย < 100 mg/dL ถือว่าเสี่ยงสูงต่อการเกิด Hypoglycemia ขณะออกแรง ต้องให้คาร์โบไฮเดรตที่ดูดซึมเร็ว 15-20 กรัมทันที และตรวจซ้ำหลัง 15 นาทีจนกระทั่งระดับน้ำตาลปลอดภัย (≥ 100 mg/dL) จึงเริ่มออกกำลังกายได้ และห้ามฉีดอินซูลินเข้ากล้ามเนื้อที่จะใช้งานเด็ดขาด"
  },
  {
    category: "Musculoskeletal PT",
    question: "นักฟุตบอลได้รับบาดเจ็บข้อเท้าจากการถูกผู้เล่นอื่นปะทะจนข้อเท้ากระดกขึ้นและบิดออกนอกอย่างรุนแรง (Forced Dorsiflexion with External Rotation) ตรวจพบอาการกดเจ็บบริเวณหน้าแข้งส่วนล่างเหนือตาตุ่ม และการทำ Squeeze test รวมถึง Kleiger's test ให้ผลบวก โครงสร้างใดได้รับความเสียหาย?",
    options: [
      "A. เอ็นด้านนอก Anterior Talofibular Ligament (ATFL)",
      "B. เอ็นยึดระหว่างกระดูกทิเบียและฟิบูลา (Distal Tibiofibular Syndesmosis / High Ankle Sprain)",
      "C. เอ็นด้านใน Deltoid ligament เส้นเดียว",
      "D. เส้นเอ็นร้อยหวายฉีกขาดสมบูรณ์"
    ],
    correct: 1,
    hint: "การฉีกขาดของเส้นเอ็นที่ยึดกระดูกหน้าแข้งคู่ขนานกัน (High ankle sprain) ซึ่งต้องใช้เวลาพักฟื้นนานกว่าข้อเท้าพลิกธรรมดา 2 เท่า",
    explanation: "กลไกการเกิด Dorsiflexion ร่วมกับ External rotation ของเท้า จะผลักให้กระดูก Talus ถ่างแยกกระดูก Tibia และ Fibula ออกจากกัน ส่งผลให้เส้นเอ็นยึดกระดูก Syndesmotic complex (AITFL, PITFL, Interosseous membrane) ฉีกขาด เรียกว่า 'High ankle sprain' หรือ Syndesmosis injury ตรวจยืนยันด้วย Squeeze test และ Kleiger's test"
  },
  {
    category: "Musculoskeletal PT",
    question: "ผู้ป่วยหญิงอายุ 54 ปี มีอาการปวดหลังส่วนเอวรุนแรงขึ้นเรื่อยๆ มา 2 เดือน ปวดตลอดเวลาแม้ในเวลานอนพักกลางคืน (Nocturnal unremitting pain) มีไข้ต่ำๆ เบื่ออาหาร น้ำหนักลดลงฮวบฮาบ 6 กิโลกรัมโดยไม่ได้ตั้งใจ และมีประวัติเคยผ่าตัดรักษามะเร็งเต้านมเมื่อ 3 ปีก่อน ข้อใดคือการจัดการทางกายภาพบำบัดที่ถูกต้องที่สุด?",
    options: [
      "A. ทำการรักษาด้วยคลื่นอัลตราซาวด์บำบัดเพื่อลดอาการปวดกล้ามเนื้อหลัง",
      "B. ให้การดัดดึงกระดูกสันหลังระดับเอวด้วยเครื่อง Traction น้ำหนัก 50% ของน้ำหนักตัว",
      "C. สงสัยภาวะ Red Flag (การแพร่กระจายของมะเร็งมายังกระดูกสันหลัง: Spinal Metastasis) สั่งยุติการรักษาทางกายภาพบำบัดทันที และส่งตัวผู้ป่วยพบแพทย์เพื่อตรวจภาพถ่ายรังสีและตรวจวินิจฉัยอย่างเร่งด่วน",
      "D. ให้ผู้ป่วยทำท่ายืดกล้ามเนื้อหลังและแนะนำให้ออกกำลังกายว่ายน้ำสัปดาห์ละ 3 วัน"
    ],
    correct: 2,
    hint: "อาการปวดที่ไม่สัมพันธ์กับท่าทาง ปวดกลางคืน น้ำหนักลด และมีประวัติมะเร็งเดิม ถือเป็น Red Flag สำคัญสูงสุด",
    explanation: "อาการปวดหลังที่ไม่ทุเลาลงเมื่อนอนพัก, ปวดตื่นกลางคืน (Night pain), มีไข้ต่ำ, น้ำหนักลดโดยไม่ทราบสาเหตุ และมีประวัติโรคมะเร็ง เป็นสัญญาณเตือนอันตรายร้ายแรง (Red flags) ขั้นวิกฤตของโรคมะเร็งแพร่กระจายสู่กระดูกสันหลัง (Spinal Metastasis) นักกายภาพบำบัดต้องไม่ให้การรักษาทางกายภาพบำบัดใดๆ และต้องส่งตัวผู้ป่วยพบแพทย์ทันทีเพื่อความปลอดภัยในชีวิต"
  },
  {
    category: "Pediatric PT",
    question: "เด็กชายอายุ 10 เดือน ยังไม่สามารถพลิกคว่ำหรือทรงตัวนั่งได้ กล้ามเนื้อทั่วตัวมีลักษณะปวกเปียกป้ำ ปล่อยมือแล้วแขนขาตกลงบนเตียงทันที (Floppy infant / Generalized hypotonia) ไม่พบ Deep tendon reflexes และตรวจพบลิ้นสั่นระริก (Tongue fasciculation) ข้อใดคือโรคที่น่าสงสัยมากที่สุด?",
    options: [
      "A. Spinal Muscular Atrophy (SMA Type 1 หรือ Type 2)",
      "B. Spastic Quadriplegia Cerebral Palsy",
      "C. Duchenne Muscular Dystrophy",
      "D. Down Syndrome"
    ],
    correct: 0,
    hint: "โรคทางพันธุกรรมที่มีการเสื่อมสลายของ Anterior horn cells ในไขสันหลังและก้านสมอง",
    explanation: "ภาวะทารกตัวอ่อนปวกเปียก (Floppy infant) ร่วมกับสูญเสียรีเฟล็กซ์ (Areflexia) และมี Tongue fasciculation เป็นลักษณะเฉพาะทางคลินิกของการเสื่อมสลายของ Lower Motor Neuron จากโรค Spinal Muscular Atrophy (SMA) แตกต่างจาก Cerebral Palsy ที่มักจะมี Hyperreflexia หรือ Duchenne ที่อาการอ่อนแรงมักเริ่มแสดงอาการชัดเจนหลังอายุ 2-3 ปีขึ้นไป"
  }
];