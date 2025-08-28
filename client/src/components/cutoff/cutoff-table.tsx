import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { CutoffResponse } from "@/types/cutoff";

interface CutoffTableProps {
  data: CutoffResponse;
  onPageChange: (page: number) => void;
}

export function CutoffTable({ data, onPageChange }: CutoffTableProps) {
  const { records, page, totalPages, total } = data;

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden animate-fade-in p-2 sm:p-4 md:p-6">
      <div className="p-4 sm:p-6 border-b border-border">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <h3 className="text-lg font-semibold text-foreground">Search Results</h3>
          <span className="text-sm text-muted-foreground" data-testid="results-count">
            Showing {records.length > 0 ? ((page - 1) * 10) + 1 : 0}-{Math.min(page * 10, total)} of {total} records
          </span>
        </div>
      </div>
      <div className="w-full overflow-x-auto custom-scrollbar">
        <div className="min-w-[600px]">
          <Table>
            <TableHeader>
              <TableRow className="bg-secondary">
                <TableHead className="text-muted-foreground">Institute</TableHead>
                <TableHead className="text-muted-foreground">Branch</TableHead>
                <TableHead className="text-muted-foreground">Year</TableHead>
                <TableHead className="text-muted-foreground">Category</TableHead>
                <TableHead className="text-muted-foreground">Opening Rank</TableHead>
                <TableHead className="text-muted-foreground">Closing Rank</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {records.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                    No cutoff records found. Try adjusting your filters.
                  </TableCell>
                </TableRow>
              ) : (
                records.map((record) => (
                  <TableRow 
                    key={record.id} 
                    className="hover:bg-secondary/50 transition-colors duration-200"
                    data-testid={`cutoff-row-${record.id}`}
                  >
                    <TableCell className="text-foreground">{record.institute}</TableCell>
                    <TableCell className="text-cyan-400">{record.branch}</TableCell>
                    <TableCell className="text-foreground">{record.year}</TableCell>
                    <TableCell className="text-emerald-400">{record.category}</TableCell>
                    <TableCell className="font-semibold text-foreground">
                      {record.openingRank || "-"}
                    </TableCell>
                    <TableCell className="font-semibold text-foreground">
                      {record.closingRank}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      {totalPages > 1 && (
        <div className="px-4 sm:px-6 py-4 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <div className="text-sm text-muted-foreground" data-testid="pagination-info">
              Page {page} of {totalPages}
            </div>
            <div className="flex space-x-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => onPageChange(page - 1)}
                disabled={page <= 1}
                className="border border-border hover:bg-accent transition-colors duration-200"
                data-testid="prev-page"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => onPageChange(page + 1)}
                disabled={page >= totalPages}
                className="border border-border hover:bg-accent transition-colors duration-200"
                data-testid="next-page"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
