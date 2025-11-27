"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Search, Edit2, Save, X } from "lucide-react";

interface PlayerScore {
  _id: string;
  name: string;
  email: string;
  number: string;
  domain: string;
  round1: number;
  round2: number | false;
  round3: number | false;
}

interface EditingState {
  playerId: string | null;
  round: 'round2' | 'round3' | null;
  value: string;
}

export default function AdminPage() {
  const [leaderboard, setLeaderboard] = useState<PlayerScore[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [editing, setEditing] = useState<EditingState>({ playerId: null, round: null, value: '' });
  const [saving, setSaving] = useState(false);
  const itemsPerPage = 20;

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5002';
      const response = await fetch(`${backendUrl}/skillvita/games`);
      const result = await response.json();
      
      if (result.success && result.data) {
        // Transform backend data to leaderboard format
        const transformedData: PlayerScore[] = result.data.map((item: any) => ({
          _id: item._id,
          name: item.name,
          email: item.email,
          number: item.number,
          domain: item.domain,
          round1: item.round1_score,
          round2: item.round2_score,
          round3: item.round3_score,
        }));
        setLeaderboard(transformedData);
      }
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (playerId: string, round: 'round2' | 'round3', currentValue: number | false) => {
    setEditing({
      playerId,
      round,
      value: currentValue === false ? '' : currentValue.toString(),
    });
  };

  const handleCancelEdit = () => {
    setEditing({ playerId: null, round: null, value: '' });
  };

  const handleSaveScore = async (playerId: string, round: 'round2' | 'round3') => {
    const score = parseInt(editing.value);
    
    if (isNaN(score) || score < 0 || score > 100) {
      alert('Please enter a valid score between 0 and 100');
      return;
    }

    setSaving(true);
    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5002';
      const fieldName = round === 'round2' ? 'round2_score' : 'round3_score';
      const response = await fetch(`${backendUrl}/skillvita/games/${playerId}/${round}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ [fieldName]: score }),
      });

      const result = await response.json();

      if (result.success) {
        // Update local state
        setLeaderboard(prevLeaderboard =>
          prevLeaderboard.map(player =>
            player._id === playerId
              ? { ...player, [round]: score }
              : player
          )
        );
        setEditing({ playerId: null, round: null, value: '' });
        console.log('Score updated successfully:', result);
      } else {
        alert('Failed to update score');
      }
    } catch (error) {
      console.error('Error updating score:', error);
      alert('Error updating score');
    } finally {
      setSaving(false);
    }
  };

  const calculateTotalScore = (player: PlayerScore): number => {
    let total = player.round1;
    if (player.round2 !== false) total += player.round2;
    if (player.round3 !== false) total += player.round3;
    return total;
  };

  // Filter by search query (name, email, or domain)
  const filteredLeaderboard = leaderboard.filter((player) =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    player.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    player.domain.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort by total score descending
  const sortedLeaderboard = [...filteredLeaderboard].sort(
    (a, b) => calculateTotalScore(b) - calculateTotalScore(a)
  );

  // Pagination calculations
  const totalPages = Math.ceil(sortedLeaderboard.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedLeaderboard = sortedLeaderboard.slice(startIndex, endIndex);

  // Reset to page 1 when search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  if (loading) {
    return (
      <div className="container mx-auto py-10">
        <div className="text-center">Loading admin panel...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Admin Panel - Game Leaderboard</h1>
          <p className="text-muted-foreground">
            Complete view of all player rankings and details
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Search by name, email, or domain..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

      <Card className="p-6">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">#</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Domain</TableHead>
                <TableHead className="text-center">Round 1</TableHead>
                <TableHead className="text-center">Round 2</TableHead>
                <TableHead className="text-center">Round 3</TableHead>
                <TableHead className="text-center font-bold">Total Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedLeaderboard.map((player, index) => {
                const globalIndex = startIndex + index;
                const isEditingRound2 = editing.playerId === player._id && editing.round === 'round2';
                const isEditingRound3 = editing.playerId === player._id && editing.round === 'round3';
                
                return (
                <TableRow key={player._id}>
                  <TableCell className="font-medium">{globalIndex + 1}</TableCell>
                  <TableCell className="font-medium">{player.name}</TableCell>
                  <TableCell>{player.email}</TableCell>
                  <TableCell>{player.number}</TableCell>
                  <TableCell>{player.domain}</TableCell>
                  <TableCell className="text-center">{player.round1}</TableCell>
                  
                  {/* Round 2 */}
                  <TableCell className="text-center">
                    {isEditingRound2 ? (
                      <div className="flex items-center justify-center gap-1">
                        <Input
                          type="number"
                          min="0"
                          max="100"
                          value={editing.value}
                          onChange={(e) => setEditing({ ...editing, value: e.target.value })}
                          className="w-16 h-8 text-center"
                          disabled={saving}
                          autoFocus
                        />
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0"
                          onClick={() => handleSaveScore(player._id, 'round2')}
                          disabled={saving}
                        >
                          <Save className="h-4 w-4 text-green-600" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0"
                          onClick={handleCancelEdit}
                          disabled={saving}
                        >
                          <X className="h-4 w-4 text-red-600" />
                        </Button>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <span>
                          {player.round2 !== false ? (
                            player.round2
                          ) : (
                            <span className="text-muted-foreground italic">Not Played</span>
                          )}
                        </span>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0"
                          onClick={() => handleEditClick(player._id, 'round2', player.round2)}
                        >
                          <Edit2 className="h-4 w-4 text-blue-600" />
                        </Button>
                      </div>
                    )}
                  </TableCell>

                  {/* Round 3 */}
                  <TableCell className="text-center">
                    {isEditingRound3 ? (
                      <div className="flex items-center justify-center gap-1">
                        <Input
                          type="number"
                          min="0"
                          max="100"
                          value={editing.value}
                          onChange={(e) => setEditing({ ...editing, value: e.target.value })}
                          className="w-16 h-8 text-center"
                          disabled={saving}
                          autoFocus
                        />
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0"
                          onClick={() => handleSaveScore(player._id, 'round3')}
                          disabled={saving}
                        >
                          <Save className="h-4 w-4 text-green-600" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0"
                          onClick={handleCancelEdit}
                          disabled={saving}
                        >
                          <X className="h-4 w-4 text-red-600" />
                        </Button>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <span>
                          {player.round3 !== false ? (
                            player.round3
                          ) : (
                            <span className="text-muted-foreground italic">Not Played</span>
                          )}
                        </span>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0"
                          onClick={() => handleEditClick(player._id, 'round3', player.round3)}
                        >
                          <Edit2 className="h-4 w-4 text-blue-600" />
                        </Button>
                      </div>
                    )}
                  </TableCell>

                  <TableCell className="text-center font-bold text-lg">
                    {calculateTotalScore(player)}
                  </TableCell>
                </TableRow>
              );
              })}
            </TableBody>
          </Table>
        </div>

        {sortedLeaderboard.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            {searchQuery
              ? `No players found matching "${searchQuery}"`
              : "No leaderboard data available"}
          </div>
        )}
      </Card>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Showing {startIndex + 1} to {Math.min(endIndex, sortedLeaderboard.length)} of{" "}
            {sortedLeaderboard.length} players
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              variant="outline"
              size="sm"
            >
              Previous
            </Button>
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                // Show first page, last page, current page, and pages around current
                if (
                  page === 1 ||
                  page === totalPages ||
                  (page >= currentPage - 1 && page <= currentPage + 1)
                ) {
                  return (
                    <Button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      className="w-10"
                    >
                      {page}
                    </Button>
                  );
                } else if (page === currentPage - 2 || page === currentPage + 2) {
                  return (
                    <span key={page} className="px-2 text-muted-foreground">
                      ...
                    </span>
                  );
                }
                return null;
              })}
            </div>
            <Button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              variant="outline"
              size="sm"
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
