<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\EncryptedPrivateChannel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use App\Models\User;

class LotterySent implements ShouldBroadcast
{
    use Dispatchable,  InteractsWithSockets, SerializesModels;


    private  $user;
    private  $data;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(User $user, $data)
    {
        $this->user = $user;
        $this->data = $data;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        logger()->info("lottery.{$this->user->id}");
        return new EncryptedPrivateChannel("lottery.".$this->user->id);
    }

     /**
     * Broadcast with specific data.
     *
     * @return array
     */
    public function broadcastWith()
    {
        return array_merge($this->data,['user' => $this->user->only('id', 'name')]);
    }
}
