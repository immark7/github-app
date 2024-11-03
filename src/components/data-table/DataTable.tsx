import { Loader2 } from "lucide-react";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "../ui/table";
import { FunctionComponent } from "react";
import { Column } from "../../libs/types";

interface Props {
  data: any[];
  columns: Column[];
  isLoading?: boolean;
  emptyMessage?: string;
}

export const DataTable: FunctionComponent<Props> = ({
  data,
  columns,
  isLoading = false,
  emptyMessage = "No results found",
}) => {
  const isEmpty = data.length === 0;

  return (
    <div className="relative flex-1 flex flex-col min-h-0 border rounded-md bg-card">
      <Table className="overflow-auto">
        <TableHeader className="sticky top-0 bg-card z-10">
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.key} className="bg-muted">
                {column.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {isEmpty ? (
            <TableCell colSpan={columns.length}>
              <div className="h-96 flex flex-col items-center justify-center text-muted-foreground">
                <p>{emptyMessage}</p>
              </div>
            </TableCell>
          ) : (
            data.map((row, index) => (
              <TableRow key={index}>
                {columns.map((column) => (
                  <TableCell key={column.key}>
                    {column.render
                      ? column.render(row[column.key], row)
                      : String(row[column.key])}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      {isLoading && (
        <div className="absolute inset-0 bg-background/50 backdrop-blur-sm z-100 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      )}
    </div>
  );
};
