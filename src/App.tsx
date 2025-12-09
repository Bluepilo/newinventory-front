import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import store from "./redux/store";
import { Toaster } from "sonner";
import Routing from "./Routing";

let persistor = persistStore(store);

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Routing />
				<Toaster
					expand
					visibleToasts={9}
					toastOptions={{ closeButton: true }}
					richColors
				/>
			</PersistGate>
		</Provider>
	);
};

export default App;
