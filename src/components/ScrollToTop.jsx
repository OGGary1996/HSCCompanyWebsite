{/* 这个组件用于每次点击跳转之后自动回到页面顶部 */}

import {useEffect} from "react";
import {useLocation} from "react-router-dom";

function ScrollToTop(){
  // useLocation 获取当前的路径信息,返回数组，包含当前的路径名、搜索参数和哈希值
  const {pathname} = useLocation();

  // useEffect 每次 pathname 变化时触发
  // 参数1: 需要执行的函数，参数2: 依赖项数组
  useEffect(() => {
    // window.scrollTo(0, 0); // 直接跳转到顶部
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 平滑滚动
    });
  }, [pathname]);

  return null; // 这个组件不需要渲染任何内容

}

export default ScrollToTop;