import Text from "./components/text";
import Icon from "./components/icon";
import Badge from "./components/badge";

import TrashIcon from "./assets/icons/Trash-Regular.svg?react"

function App() {
  return (
    <div className="grid gap-3">
      <div className="flex flex-col gap-1">
        <Text variant="body-sm-bold">TEste</Text>
        <Text variant="body-md">TEste</Text>
        <Text variant="body-md-bold">TEste</Text>
      </div>

      <div className="flex gap-1">
        <Icon svg={TrashIcon} className="size-5 fill-pink-base" />
      </div>

      <Badge>Badge</Badge>
    </div>

  )
}

export default App;

