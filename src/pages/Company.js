import React from 'react';

const Company = () => {
    return (
        <div className='company'>
            <h1>
                과거로부터 전해 온 책을 사랑하는 마음을
                <br />
                지속적으로 이어나가고자 하는 뜻을 담고 있습니다.
            </h1>
            <div className='text_box'>
                <div className='intro'>
                    <p className='title'>소개</p>
                    <p>북스리브로는 책을 뜻하는 BOOK과 LIBRO의 합성어로<br />
                        과거로부터 전해져 온 책을 사랑하는 마음을<br />
                        지속적으로 이어나가고자 하는 뜻을 담고 있습니다.<br /><br />
                    [리브로 : LIBRO]는 고대 로마에서 쓰이던 라틴어 [리베르]에서 유래합니다.<br />
                        [나무 속껍질]이라는 뜻으로, 로마인들은 이 리베르에 글씨를 써서 묶었는데<br />
                        그 묶음이 그대로 [리베르 : 책]로 불리게 되었다고 합니다.</p>
                </div>
                <div className='mission'>
                    <p className='title'>미션</p>
                    <p>북스리브로의 공간은 모든 사람에게 풍성한 지식, 문화적 경험을 제공합니다.</p>
                </div>
                <div className='vision'>
                    <p className='title'>비전</p>
                    <p>문화적 감성으로 일상을 풍요롭게 도와드릴 수 있는 공간을 만듭니다.</p>
                </div>
            </div>
        </div>
    );
};

export default Company;