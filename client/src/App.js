import { useState } from "react";
import "./App.css";
import { Modal } from "./commons/components/modals/modal";
import FileExtensionSetting from "./components/fileExtensionSetting/fileExtensionSettins";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="App">
      <button onClick={openModal} className="btn_purple">
        파일 확장자 차단 설정
      </button>
      <Modal open={modalOpen} close={closeModal} header="파일 확장자 차단">
        <FileExtensionSetting />
      </Modal>
    </div>
  );
}

export default App;
