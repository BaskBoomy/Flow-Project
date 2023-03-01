import { useEffect, useState } from "react";
import { ReactComponent as CheckFilled } from "../../assets/check-fill.svg";
import { ReactComponent as Check } from "../../assets/check.svg";
import { ReactComponent as Label } from "../../assets/label.svg";

const FileExtensionList = ({ ExtensionBlockRepository }) => {
  const [extensionList, setExtensionList] = useState([]);

  useEffect(() => {
    ExtensionBlockRepository.getExtensionList().then((data) => {
      setExtensionList(data);
    });
  });

  const updateExtension = (extension) => {
    //db에 차단 확장자 수정
    if (extension.isCustom) {
      if (
        extension.isCustom &&
        extension.isBlocked &&
        window.confirm(
          "커스텀 확장자입니다. \n비활성화하게 되면 삭제됩니다. \n그래도 비활성화하시겠습니까?"
        )
      ) {
        ExtensionBlockRepository.deleteExtension(extension.id);
      }
    } else {
      ExtensionBlockRepository.updateExtension({
        id: extension.id,
        name: extension.name,
        isBlocked: !extension.isBlocked,
      }).then((data) => {
        console.log(data);
      });
    }
  };
  return (
    <div className="extension_list_box">
      {extensionList.map((extension) => {
        return (
          <div
            key={extension.id}
            className="extension_box_vertical"
            onClick={() => updateExtension(extension)}
          >
            <div>
              {extension.isCustom ? <Label /> : null}
              {` ${extension.name}`}
            </div>
            <button id={extension.id} className="extension_close_btn">
              {extension.isBlocked ? <CheckFilled /> : <Check />}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default FileExtensionList;
