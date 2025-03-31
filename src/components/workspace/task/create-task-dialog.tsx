import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import CreateTaskForm from "./create-task-form";
import { useState } from "react";
import { DialogTitle } from "@radix-ui/react-dialog";

const CreateTaskDialog = (props: { projectId?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <Dialog modal={true} open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button>
            <Plus />
            New Task 
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-lg max-h-auto my-5 border-0">
          <DialogHeader className="mb-1 pb-2 border-b">
            <DialogTitle  className="text-xl tracking-[-0.16px] dark:text-[#fcfdffef] font-semibold mb-1
                  text-center sm:text-left">Create Task</DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm leading-tight">
            Organize and manage tasks, resources, and team collaboration
            </DialogDescription>
          </DialogHeader>
          <CreateTaskForm projectId={props.projectId}  onClose={onClose}/>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateTaskDialog;
