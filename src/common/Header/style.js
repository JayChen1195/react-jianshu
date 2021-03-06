import styled from 'styled-components';
import logoPic from '../../statics/images/logo.png';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 58px;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  // padding-right: 70px;
  // box-sizing: border-box;
  height: 56px;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 18px;
  color: #333; 
  &.left{
    float: left;
  }
  &.right{
    float: right;
    color: #969696;
  }
  &.active{
    color: #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    color: #999;
    &.focused{
      color: #fff;
      background-color: #777;
    }
  }
`;

export const SearchInput = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  line-height: 38px;
  margin: 9px 0 0 20px;
  padding: 0 30px 0 20px;
  border: none;
  outline: none;
  font-size: 14px;
  box-sizing: border-box;
  border-radius: 19px;
  color: #666;
  background-color: #eee;
  &::placeholder{
    color: #999;
  }
  &.focused{
    width: 240px;
    padding: 0 40px 0 20px;
  }
  &.slide-enter{
    transition: all .32s ease-out;
  }
  &.slide-enter-active{
    width: 240px;
  }
  &.slide-exit{
    transition: all .32s ease-in;
  }
  &.slide-exit-active{
    width: 160px;
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  top: 58px;
  left: 20px;
  width: 240px;
  padding: 0 20px;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  background-color: #fff;
`;

export const SearchInfoTitle = styled.div`
  margin: 20px 0 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.span`
  float: right;
  margin-top: -1px;
  font-size: 13px;
  .iconfont {
    display: block;
    float: left;
    margin-right: 3px;
    font-size: 14px;
    transition: all .3s ease-in;
    transform: rotate(0deg);
    transform-origin: center center;
  }
`;

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  padding: 0 6px;
  margin: 0 10px 14px 0;  
  font-size: 12px;
  line-height: 22px;
  border:1px solid #ddd;
  color: #787878;
  border-radius: 3px;
`;

export const Addtion = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  margin: 9px 20px 0 0;
  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;
  border-radius: 19px;
  border: 1px solid #ec6349;
  .pen{
    margin-right: 6px;
  }
  &.reg{
    color: #ec6349;
  }
  &.writting{
    color: #fff;
    background-color: #ec6349;
  }
`