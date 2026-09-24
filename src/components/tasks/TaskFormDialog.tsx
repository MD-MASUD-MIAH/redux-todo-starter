import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  PRIORITY_LEVEL,
  STATUS_LEVEL,
  TASK_PRIORITY,
  TASK_STATUS,
  type ITask,
} from "@/redux/features/tasks";
import { addTask } from "@/redux/features/tasks/task.slice";
import { useAppDispatch } from "@/redux/hook";
import { Controller, useForm } from "react-hook-form";


type TDialogMode = 'edit' | 'create' 

interface IProps {

  open: boolean ,
  mode: TDialogMode ,
  onClose: () => void;
}

export function TaskFormDialog({ open, mode, onClose }:IProps) {
  const { register, handleSubmit, control } = useForm();


  const dispatch = useAppDispatch()

  const onSubmit = (values:ITask[]
  ) => {
    console.log(values); 

    dispatch(addTask(values))
    onClose();
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) onClose();
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {mode === "edit" ? "Edit task" : "New task"}
          </DialogTitle>
          <DialogDescription>
            {mode === "edit"
              ? "Update the details of this task."
              : "Capture what you need to get done."}
          </DialogDescription>
        </DialogHeader>

        <form
          id="task-form"
          className="space-y-4"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="space-y-1.5">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              autoFocus
              {...register("title")}
              placeholder="What needs doing?"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              rows={3}
              {...register("description")}
              placeholder="Optional details…"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label>Status</Label>
              <Controller
                control={control}
                name="status"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>

                    <SelectContent>
                      {TASK_STATUS.map((status) => (
                        <SelectItem value={status}>
                          {STATUS_LEVEL[status]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            <div className="space-y-1.5">
              <Label>Priority</Label>
              <Controller
                control={control}
                name="priority"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      {TASK_PRIORITY.map((priority) => (
                        <SelectItem value={priority}>
                          {PRIORITY_LEVEL[priority]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </div>
        </form>

        <DialogFooter>
          <Button type="button" variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button form="task-form" type="submit">
            {mode === "edit" ? "Save changes" : "Create task"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
