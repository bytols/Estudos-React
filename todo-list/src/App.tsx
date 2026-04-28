import Text from "./components/text";
import Icon from "./components/icon";
import Badge from "./components/badge";
import Button from "./components/button";
import ButtonIcon from "./components/ButtonIcon";
import InputText from "./components/input-test";
import InputCheckbox from "./components/input-checkbox";
import Card from "./components/card";
import Container from "./components/container";
import Skeleton from "./components/skeleton";

import TrashIcon from "./assets/icons/Trash-Regular.svg?react"
import SquareRegular from "./assets/icons/Square-Regular.svg?react"

function App() {
  return (
    <Container>
      <div className="grid gap-5">
        <div className="flex flex-col gap-1">
          <Text variant="body-sm-bold">TEste</Text>
          <Text variant="body-md">TEste</Text>
          <Text variant="body-md-bold">TEste</Text>
        </div>

        <div className="flex gap-1">
          <Icon svg={TrashIcon} className="size-5 fill-pink-base" />
        </div>

        <div>
          <Badge>Badge</Badge>
        </div>

        <div>
          <Button icon={SquareRegular}>Nova Tarefa</Button>
        </div>

        <div className="flex gap-1">
          <ButtonIcon icon={TrashIcon}/>
        </div>

        <div>
          <InputText/>
        </div>

        <div>
          <InputCheckbox/>
        </div>

        <div>
          <Card size="md"> Ola mundo </Card>
        </div>

        <div className="space-y-2">
          <Skeleton className="h-6"/>
          <Skeleton className="h-6"/>
          <Skeleton className="w-96 h-6"/>
        </div>
      </div>
    </Container>

  )
}

export default App;

