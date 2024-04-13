import { useEffect, useState } from "react";

const useActiveTabFavicon = () => {
  const [faviconUrl, setFaviconUrl] = useState<string>("");

  useEffect(() => {
    const queryInfo = { active: true, currentWindow: true };
    chrome.tabs.query(queryInfo, (tabs) => {
      const activeTab = tabs[0];
      if (activeTab.url) {
        const url = new URL(activeTab.url);
        const favicon = `${url.origin}/favicon.ico`;
        setFaviconUrl(favicon);
      }
    });
  }, []);

  return faviconUrl;
};

export default useActiveTabFavicon;
