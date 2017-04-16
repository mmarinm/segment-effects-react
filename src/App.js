import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import styled, { injectGlobal }  from 'styled-components';

injectGlobal`
	body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
	}
`;


const animate = (val) => spring(val, {
  stiffness: 53,
  damping: 27
});

const Segmenter = styled.div`
  width: 100vw;
  height: 100vh;
`
const SegmenterLayout = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`
const SegmenterWrap = styled(SegmenterLayout)``
const SegmenterPieces = styled(SegmenterLayout)``
const SegmenterBackground = styled(SegmenterLayout)`
  background-image: url(https://source.unsplash.com/kk3W5-0b6e0/1600x900);
  background-size: cover;
  background-position: center center;
`
const SegmenterBox = styled(SegmenterBackground)``
const SegmenterShadow = styled.div`
  position: absolute;
  box-shadow: 0px 7px 10px 3px rgba(0, 0, 0, 0.45);
`
const SegmenterBody = styled(SegmenterLayout)`
  display: flex;
  align-items: center;
  justify-content: center;
`
const SegmenterH1 = styled.h1`
  font-size: 7vw;
  white-space: nowrap;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [
        {
          top: 12,
          left: 70,
          width: 20,
          height: 10
        },
        {
          top: 12,
          left: 6,
          width: 30,
          height: 30
        },
        {
          top: 75,
          left: 15,
          width: 40,
          height: 20
        },
        {
          top: 30,
          left: 40,
          width: 40,
          height: 40
        }
      ]
    };
  }
  render() {
    return (
      <Segmenter>
        <SegmenterBackground>
        <SegmenterPieces style={{
            perspective: `200px`
          }}>
          { this.state.boxes.map(({ top, left, width, height }, key) =>
            <Motion key={key} defaultStyle={{ z: 0 }} style={{ z: animate(20) }}>
              {({ z }) =>
                <SegmenterWrap style={{
                  transform: `translateZ(${z}px)`
                }}>
                  <Motion defaultStyle={{ opacity: 0 }} style={{ opacity: animate(1) }}>
                    {({ opacity }) =>
                      <SegmenterShadow style={{
                        top: `${top}%`,
                        left: `${left}%`,
                        width: `${width}%`,
                        height: `${height}%`,
                        opacity
                      }}></SegmenterShadow>
                    }
                  </Motion>
                  <SegmenterBox style={{
                    clipPath: `polygon(70% 12%, 90% 12%, 90% 22%, 70% 22%)`
                  }}></SegmenterBox>
                </SegmenterWrap>
              }
            </Motion>
          ) }
        </SegmenterPieces>
        <SegmenterBody>
          <Motion
            defaultStyle={{
              letterSpacing: 12,
              opacity: 0
            }}
            style={{
              letterSpacing: animate(22),
              opacity: animate(1)
            }}>
            { ({ letterSpacing, opacity }) =>
              <SegmenterH1 style={{
                letterSpacing,
                opacity
              }}>SEGMENT EFFECT</SegmenterH1>
            }
          </Motion>
        </SegmenterBody>
				</SegmenterBackground>
      </Segmenter>
    );
  }
}

export default App;
