import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Filter, Download } from "lucide-react";
import type { CutoffFilters, Metadata } from "@/types/cutoff";

interface FilterControlsProps {
	filters: CutoffFilters;
	metadata: Metadata;
	onFilterChange: (filters: CutoffFilters) => void;
	onApplyFilters: () => void;
	onExportCSV: () => void;
}

export function FilterControls({
	filters,
	metadata,
	onFilterChange,
	onApplyFilters,
	onExportCSV,
}: FilterControlsProps) {
	const updateFilter = (key: keyof CutoffFilters, value: any) => {
		onFilterChange({ ...filters, [key]: value === "all" ? undefined : value });
	};

	return (
		<div className="bg-card border border-border rounded-xl p-2 sm:p-4 md:p-6 mb-8 animate-fade-in">
			<div className="w-full overflow-x-auto">
				<div className="min-w-[600px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
					<div>
						<Label className="block text-sm font-medium text-muted-foreground mb-2">Year</Label>
						<Select
							value={filters.year?.toString() || "all"}
							onValueChange={(value) => updateFilter("year", value === "all" ? undefined : parseInt(value))}
						>
							<SelectTrigger className="w-full focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300" data-testid="filter-year">
								<SelectValue placeholder="All Years" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">All Years</SelectItem>
								{metadata.years.map((year) => (
									<SelectItem key={year} value={year.toString()}>{year}</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
					<div>
						<Label className="block text-sm font-medium text-muted-foreground mb-2">Institute</Label>
						<Select
							value={filters.institute || "all"}
							onValueChange={(value) => updateFilter("institute", value)}
						>
							<SelectTrigger className="w-full focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300" data-testid="filter-institute">
								<SelectValue placeholder="All Institutes" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">All Institutes</SelectItem>
								{metadata.institutes.map((institute) => (
									<SelectItem key={institute} value={institute}>{institute}</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
					<div>
						<Label className="block text-sm font-medium text-muted-foreground mb-2">Branch</Label>
						<Select
							value={filters.branch || "all"}
							onValueChange={(value) => updateFilter("branch", value)}
						>
							<SelectTrigger className="w-full focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300" data-testid="filter-branch">
								<SelectValue placeholder="All Branches" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">All Branches</SelectItem>
								{metadata.branches.map((branch) => (
									<SelectItem key={branch} value={branch}>{branch}</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
					<div>
						<Label className="block text-sm font-medium text-muted-foreground mb-2">Category</Label>
						<Select
							value={filters.category || "all"}
							onValueChange={(value) => updateFilter("category", value)}
						>
							<SelectTrigger className="w-full focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300" data-testid="filter-category">
								<SelectValue placeholder="All Categories" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">All Categories</SelectItem>
								{metadata.categories.map((category) => (
									<SelectItem key={category} value={category}>{category}</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
				</div>
				<div className="min-w-[600px] flex flex-col sm:flex-row gap-3">
					<div className="flex-1">
						<Input
							type="text"
							placeholder="Search institutes, branches..."
							value={filters.search || ""}
							onChange={(e) => updateFilter("search", e.target.value)}
							className="w-full focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
							data-testid="search-input"
						/>
					</div>
					<Button
						onClick={onApplyFilters}
						className="btn-neon-cyan transition-all duration-300"
						data-testid="apply-filters"
					>
						<Filter className="w-4 h-4 mr-2" />
						Apply Filters
					</Button>
					<Button
						onClick={onExportCSV}
						variant="secondary"
						className="border border-border hover:bg-accent transition-all duration-300"
						data-testid="export-csv"
					>
						<Download className="w-4 h-4 mr-2" />
						Export CSV
					</Button>
				</div>
			</div>
		</div>
	);
}
