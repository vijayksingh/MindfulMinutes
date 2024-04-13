import { useEffect, useState } from "react";

const useActiveTabUrl = () => {
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    const queryInfo = { active: true, currentWindow: true };
    chrome.tabs.query(queryInfo, (tabs) => {
      const activeTab = tabs[0];
      if (activeTab.url) {
        setUrl(activeTab.url);
      }
    });

    const onActivated = (activeInfo: chrome.tabs.TabActiveInfo) => {
      chrome.tabs.get(activeInfo.tabId, (tab) => {
        if (tab.url) {
          setUrl(tab.url);
        }
      });
    };

    chrome.tabs.onActivated.addListener(onActivated);

    return () => {
      chrome.tabs.onActivated.removeListener(onActivated);
    };
  }, []);

  return url;
};

export default useActiveTabUrl;
