import { useState } from "react";
import "./App.css";
import { Modal } from "./commons/components/modals/modal";
import FileExtensionSetting from "./components/fileExtensionSetting/fileExtensionSettins";

function App({ ExtensionBlockRepository }) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const fileOnChange = async (e) => {
    const file = e.target.files[0];
    const extension = getExtension(file);
    const blockedList =
      await ExtensionBlockRepository.getExtensionListWhereIsBlocked();
    if (blockedList.some((block) => block.name === extension)) {
      e.target.value = null;
      return alert("차단된 확장자입니다.");
    }
  };
  const getExtension = (file) => {
    const name = file.name;
    const lastDot = name.lastIndexOf(".");
    const extension = name.slice(lastDot + 1);
    return extension;
  };

  return (
    <div className="App">
      <button onClick={openModal} className="btn_purple">
        파일 확장자 차단 설정
      </button>
      <Modal open={modalOpen} close={closeModal} header="파일 확장자 차단">
        <FileExtensionSetting
          ExtensionBlockRepository={ExtensionBlockRepository}
        />
      </Modal>
      <div>
        <p>파일 업로드 테스트</p>
        <input type="file" className="input_file" onChange={fileOnChange} />
      </div>
    </div>
  );
}

export default App;
