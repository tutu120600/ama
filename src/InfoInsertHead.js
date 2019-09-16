import React, { useState, useEffect, useRef } from 'react';

import style from './style.css';

const InfoInsertHead = () => {

  const thisDiv = useRef(null);
  const [intro, setIntro] = useState(true);
  const [popup, setPopup] = useState(false);
  const [afterNine, setAfterNine] = useState(false);

  useEffect(() => {
    if(intro) {
      thisDiv.current.focus();
    }
  });

  const skipIntro = () => {
    setIntro(false);
  };

  const handleOnClickFor4 = () => {
    setPopup(true);
  };

  const handleOnClickFor6 = () => {
    setPopup(false);
  };

  const handleOnClickFor9 = () => {
    setAfterNine(true);
  }

  const handleOnClickFor33 = () => {

  }

  const showPopup = () => {
    if (popup) {
      return (
        <div className="page__block page__block-6">
          <div 
            className="page__block page__block-6-close"
            onClick={handleOnClickFor6}
          >
            &times;
          </div>
          <div className="page__block page__block-6-text">
            <p>
            一：本次問卷調查期間為2019年6月21日至7月14日，考量到時間與經費的限制，最後以滾雪球取樣的方法，邀請全國高中職生自行填答，總計回收2223份有效問卷。調查結果最後依受訪者性別、學校性質、以及學校地理區域進行加權，使與母體一致。母體參數依據教育統計查詢網─107學年度高級中等學校校別資料檔。
            </p>
            <br />
            <br />
            <p>
            有關滾雪球方式的操作，我們發放了紙本與網路問卷。在紙本問卷上，我們先透過在高中職任教的老師，詢問是否願意協助發放且回收問卷，並且透過老師再介紹其他願意協助發放問卷的老師。網路問卷亦同，我們透過Facebook、PTT、親朋好友以及有意願協助的老師轉傳問卷連結，同時寄出e-mail給已填答完成的學生，請他們幫忙將問卷轉傳給朋友或是同學填寫。在最後的2223份有效問卷中，紙本回收1200份，網路回收1023份。
            </p>
            <br />
            <br />
            <p>
            二：問卷調查期間，香港反送中運動爆發。
            </p>
            <br />
            <p>
            三：本份問卷設計參考美國杜克大學亞太安全研究中心《台灣國家安全調查》以及國立政治大學選舉研究中心《我國大學生政治社會化之研究》兩份問卷的題型。
            </p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  const showAfterNine = () => {
    if (afterNine) {
      return (
        <div>
          <div className="page__block page__block-11">
          </div>
          <div className="page__block page__block-12">
            <p>超過七成高中職生認為自己是「台灣人」</p>
          </div>
          <div className="page__block page__block-13">
            <p>在這份問卷中，有78.7％的受訪者認為自己是「台灣人」，遠高於「中國人」(0.8%)與「兩者皆是」(20.1%)的選項，可見「台灣」這個名詞已成為大多高中生對「我是哪裡人」的直覺反應。此外，在美國杜克大學於2019年發布的《台灣國家安全調查》中，同樣一個問題，20歲以上的成年人認同自己是「台灣人」、「中國人」、或「兩者皆是」的比例依序是：50.6%、3.1%、42.6%。若將兩份調查的數據相對照，在認同自己是「台灣人」的部分，可看出一定的差距。</p>
          </div>
          <div className="page__block page__block-14">
          </div>
          <div className="page__block page__block-15">
            <div className="page__block-15-cube">
              &nbsp;
            </div>
            <div className="page__block-15-text-box">
              <div className="page__block-15-box-text">
                <p>延續上一題，如果問題的問法改為：從「文化」角度來看，請問你認為自己是台灣人、中國人還是都是？你覺得高中職生的答案會有改變嗎？
                </p>
              </div>
            </div>
          </div>
          <div className="page__block page__block-16">
          </div>
          <div className="page__block page__block-17">
            <p>若從文化角度思考，認同「中國」的高中職生增加約16%</p>
          </div>
          <div className="page__block page__block-18">
            <p>將「文化」納入考量後，雖然受訪者認同自己是「台灣人」的比例仍占最高（62.2%），但有趣的是，認同自己是「中國人」的比例從0.8%上升到8.2%，認為自己「兩者都是」則從20.1%變為29.4%，這似乎意味著在文化層面上，部分受訪者仍對「中國」有所認同。</p>
          </div>
          <div className="page__block page__block-19">
            <div className="page__block-19-title">
              <p>12位台灣青少年 深談國家認同與未來</p>
            </div>
            <div className="page__block-19-text">
              <p>高中職生的國族認同，跟你的想像一致嗎？「青春發言人」邀請12位來自台灣各地、不同家庭背景的青少年，深入訪問他們對國家、族群，以及台灣未來的想法。</p>
            </div>
            <div className="page__block-19-video">
              Video
            </div>
          </div>
          <div className="page__block page__block-20">
            <div className="page__block page__block-20-content">
              <div className="page__block-20-content-cube">
              </div>
              <div className="page__block-20-content-text">
                <p>你怎麼看兩岸關係？</p>
              </div>
            </div>
          </div>
          <div className="page__block page__block-21">
            <p>超過七成高中職生對兩岸關係的不確定性「感到焦慮」</p>
          </div>
          <div className="page__block page__block-22">
          </div>
          <div className="page__block page__block-23">
            <p>我們用0~10分量表的方式(0完全不焦慮、10非常焦慮)詢問高中職生：「你是否會因為兩岸關係的不確定性感到焦慮？」。結果，0分的選項無人選擇，但有76.1%的人集中選填4-8分。這可說明，充滿不確定性的兩岸關係，讓大多受訪者感到「焦慮」甚至接近「非常焦慮」的狀態。</p>
          </div>
          <div className="page__block page__block-24"></div>
          <div className="page__block page__block-25">
            <p>兩岸下一步怎麼走? 超過４０％高中職生：希望維持現狀，以後走向獨立
            </p>
          </div>
          <div className="page__block page__block-26"></div>
          <div className="page__block page__block-27">
            <p>關於兩岸未來的政治關係，在六個不同的選項中，有40.3%的受訪者希望：「維持現狀，以後走向獨立」。其次是「維持現狀，看情形再決定獨立或統一」(25.2％)，以及「永遠維持現狀」(14%)。
            </p>
            <br />
            <br />
            <p>
            相比美國杜克大學於2019年發布的《台灣國家安全調查》，同樣一個問題，20歲以上的成年人對兩岸關係的期望，前四高依序是：「維持現狀，看情形再決定獨立或統一」(33.4%)、「永遠維持現狀」(23.7%)、「維持現狀，以後走向獨立(16.2%)」、「維持現狀，以後走向統一」(10.8%)。
            </p>
            <br />
            <br />
            <p>
            若從這兩份調查來看，無論是高中職生或成年人，都有超過8成的人選擇與「維持現狀」有關的選項。但多數高中職生傾向『維持現狀，以後走向獨立』，成年人則以『維持現狀，看情形再決定獨立或統一』的意見佔多數。
            </p>
          </div>
          <div className="page__block page__block-28">
            <div className="page__block page__block-28-content">
              <div className="page__block-28-content-cube">
              </div>
              <div className="page__block-28-content-text">
                <p>對台灣的愛恨情仇？</p>
              </div>
            </div>
          </div>
          <div className="page__block page__block-29">
            <p>高中職生：擁有民主自由，我驕傲！</p>
          </div>
          <div className="page__block page__block-30">
            <p>對於身為我們國家的一份子，你是否感到光榮？</p>
          </div>
          <div className="page__block page__block-31">
            <p>顯示統計結果，每個結果可以點按鈕，看看覺得光榮或不光榮的原因。</p>
          </div>
          <div className="page__block page__block-32"></div>
          <div className="page__block page__block-33">
            <div className="row-4">
              <div 
                className="col-1-of-4 page__block-33-btn"
                onClick={handleOnClickFor33}>
                一點也不光榮
              </div>
              <div 
                className="col-1-of-4 page__block-33-btn"
                onClick={handleOnClickFor33}>
                很少感到光榮
              </div>
              <div 
                className="col-1-of-4 page__block-33-btn"
                onClick={handleOnClickFor33}>
                有時感到光榮
              </div>
              <div 
                className="col-1-of-4 page__block-33-btn"
                onClick={handleOnClickFor33}>
                時常感到光榮
              </div>
            </div>
          </div>
          <div className="page__block page__block-34"></div>
          <div className="page__block page__block-35">
            <p>為了多了解青少年對國家和這塊土地的情感，在這份問卷中，設計了這項提問：「對於身為我們國家的一份子，你是否感到光榮？」，結果有47.5%的受訪者認為「有時感到光榮」，33.9%選擇「時常感到光榮」，兩者合計共81.4%。
            </p>
            <br />
            <br />
            <p>
            此外，該題也進一步請同學們寫下對我們國家「感到光榮」或「不感到光榮」的原因。其中，「感到光榮」的理由，同學們的答案高度雷同，都是認為台灣的「自由民主」以及「社會安定」，是很值得驕傲的事。而「不感到光榮」的原因，則包括「國際地位低落」、「政治混亂」等。
            </p>
          </div>
          <div className="page__block page__block-36"></div>
          <div className="page__block page__block-37">
            <p>「擔心」是多數高中職生對台灣的感受</p>
          </div>
          <div className="page__block page__block-38">
            <p>當我們講到台灣時，你認為以下哪個負面性形容詞適合描述你心理上感受？</p>
          </div>
          <div className="page__block page__block-39">
            <p>顯示統計結果，每個結果可以點按鈕，看看覺得負面形容詞的原因。</p>
          </div>
          <div className="page__block page__block-40">
            <div className="row-4">
              <div className="col-1-of-4 page__block-40-img"></div>
              <div className="col-1-of-4 page__block-40-img"></div>
              <div className="col-1-of-4 page__block-40-img"></div>
              <div className="col-1-of-4 page__block-40-img"></div>
            </div>
          </div>
          <div className="page__block page__block-41">
            <div className="row-4">
              <div className="col-1-of-4 page__block-41-btn">
                沮喪的
              </div>
              <div className="col-1-of-4 page__block-41-btn">
                難過的
              </div>
              <div className="col-1-of-4 page__block-41-btn">
                憤怒的
              </div>
              <div className="col-1-of-4 page__block-41-btn">
                擔心的
              </div>
            </div>
          </div>
          <div className="page__block page__block-42">
          </div>
          <div className="page__block page__block-43">
            <p>問完青少年是否會對自己的國家感到光榮後，問卷中進一步提問：「當我們講到台灣時，你認為以下哪個負面性形容詞適合描述你心理上感受？」。負面形容詞的選項包括：「沮喪的」、「難過的」、「憤怒的」、「擔心的」、以及「沒有」。
            </p>
            <br />
            <br />
            <p>
            結果顯示，有5成以上的受訪者認為講到台灣時，他們是「擔心的」。該題進一步請他們寫下擔心的原因時，答案則圍繞在「擔心台灣失去自由」以及「國際地位遭打壓」。
            </p>
          </div>
          <div className="page__block page__block-44"></div>
          <div className="page__block page__block-45">
            <div className="page__block-45-cube">
              &nbsp;
            </div>
            <div className="page__block-45-text-box">
              <div className="page__block-45-box-text">
                <p>高中職生沒有選票，但他們代表的卻是台灣的未來。阿嬤我很好奇，當討論到國家未來10年的目標時，高中職生會認為哪一項社會目標是最重要的呢？
                </p>
              </div>
            </div>
          </div>
          <div className="page__block page__block-46"></div>
          <div className="page__block page__block-47">
            <p>談到未來，高中職生選擇務實：經濟繁榮最重要</p>
          </div>
          <div className="page__block page__block-48">
            <p>這份問卷列出9項人們認為重要的社會目標，讓受訪者選擇。其中有32.7%受訪者認為「維持經濟繁榮」最重要，佔比最高。其次則是佔14.7%的「保障言論自由」、以及佔13.3%「讓人民對政府重大決策有更多表達意見的機會」。
            </p>
            <br />
            <br />
            <p>
            在這個數據中，第一高的「維持經濟繁榮」比第二高「保障言論自由」多了兩倍以上，可見年輕世代對於台灣未來的共識，還是著重在民生方面，相當務實。但從「保障言論自由」和「讓人民對政府重大決策有更多表達意見的機會」分據重要性的第二、第三來看，「民主自由」同樣是當前青少年們相當重視的社會發展目標。
            </p>
          </div>
          <div className="page__block page__block-49">
            <div className="page__block-49-title">
              <p>政治立場不同的世代  有對話的可能嗎？</p>
            </div>
            <div className="page__block-49-text">
              <p>看到這裡，你有更理解高中職生們怎麼看待自己的國家和土地嗎？你是否有過因為國族立場的不同，導致世代衝突的經驗呢？「青春發言人」特別邀請政治立場有所差異的青少年和成年人一起坐下來對話，嘗試找尋彼此溝通的可能。</p>
            </div>
            <div className="page__block-49-video">
              Video
            </div>
          </div>
          <div className="page__block page__block-50">
            <div className="page__block page__block-50-content">
              <div className="page__block-50-content-cube">
              </div>
              <div className="page__block-50-content-text">
                <p>高中職生的愛恨情仇？</p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="page__block page__block-10">
        </div>
      );
    }
  };
  
  const showContent = () => {
    if (intro) {
      return (
        <div 
          ref={thisDiv}
          className="one-line"
          onClick={skipIntro}
          onKeyDown={skipIntro}
          tabIndex="0"
        >
          <h3 className="one-line one-line__info-insert">有些資訊開始慢慢進入你的腦中....</h3>
        </div>
      );
    } else {
      return (
        <div className="page">
          <div className="page__block page__block-1">
            <h1>嘿！你是哪裡人？</h1>
            <h2>青少年國族認同大調查</h2>
          </div>
          <div className="page__block page__block-2">
          </div>
          <div className="page__block page__block-3">
            <p>2020總統大選將至，社會上對於總統選舉、國家認同和國家未來等議題，討論得沸沸揚揚。你會好奇代表著「未來」的青少年們究竟是怎麼想的嗎？公共電視青少年節目《青春發言人》委託政治大學「選舉研究中心」，針對全國高中職生進行國族認同 調查，分別從「你是哪裡人？」、「兩岸關係」、「對台灣的愛恨情仇？」、「高中職生對政治冷感嗎？」四大面向，帶你了解青少年如何看待自己的國家與土地。</p>
          </div>
          <div className="page__block page__block-4">
            <div 
              onClick={handleOnClickFor4}
              className="page__block page__block-4 page__block-4-btn">看研究方法
            </div>
          </div>
          <div className="page__block page__block-5">
            <div className="page__block page__block-5-content">
              <div className="page__block-5-content-cube">
              </div>
              <div className="page__block-5-content-text">
                <p>你是哪裡人？</p>
              </div>
            </div>
          </div>
          {showPopup()}
          <div className="page__block page__block-7">
            <div className="page__block-7-cube">
              &nbsp;
            </div>
            <div className="page__block-7-text-box">
              <div className="page__block-7-box-text">
                <p>在台灣，有人說自己是「台灣人」，也有人說自己是「中國人」，也有人說都是。你猜多數高中職生是怎麼想的？
                </p>
              </div>
            </div>
          </div>
          <div className="page__block page__block-8">
          </div>
          <div className="page__block page__block-9">
            <div className="row-3">
              <div 
                className="col-1-of-3 page__block-9-btn"
                onClick={handleOnClickFor9}>
                中國人
              </div>
              <div 
                className="col-1-of-3 page__block-9-btn"
                onClick={handleOnClickFor9}>
                台灣人
              </div>
              <div 
                className="col-1-of-3 page__block-9-btn"
                onClick={handleOnClickFor9}>
                都是
              </div>
            </div>
          </div>
          {showAfterNine()}
        </div>
      );
    }
  }

  return (
    showContent()
  );
}

export default InfoInsertHead;